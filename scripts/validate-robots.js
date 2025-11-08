#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

/**
 * Validador de robots.txt para Podoclinicec
 * Verifica sintaxis, directivas y optimización SEO
 */

class RobotsValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.suggestions = [];
  }

  validateFile(filePath) {
    console.log('🤖 Validador de robots.txt\n');
    console.log('=' .repeat(50));
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      this.validateContent(content);
      this.generateReport();
    } catch (error) {
      console.error(`❌ Error al leer el archivo: ${error.message}`);
      return false;
    }
  }

  validateContent(content) {
    const lines = content.split('\n').map(line => line.trim());
    let currentUserAgent = null;
    let hasSitemap = false;
    let hasUserAgent = false;

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Ignorar líneas vacías y comentarios
      if (!line || line.startsWith('#')) {
        return;
      }

      // Validar sintaxis básica
      if (!line.includes(':')) {
        this.errors.push(`Línea ${lineNum}: Sintaxis incorrecta - falta ':' en "${line}"`);
        return;
      }

      const [directive, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();
      const directives = directive.trim().toLowerCase();

      switch (directives) {
        case 'user-agent':
          hasUserAgent = true;
          currentUserAgent = value;
          this.validateUserAgent(value, lineNum);
          break;
          
        case 'disallow':
          this.validateDisallow(value, lineNum, currentUserAgent);
          break;
          
        case 'allow':
          this.validateAllow(value, lineNum, currentUserAgent);
          break;
          
        case 'sitemap':
          hasSitemap = true;
          this.validateSitemap(value, lineNum);
          break;
          
        case 'host':
          this.warnings.push(`Línea ${lineNum}: La directiva 'Host' está deprecada y no se recomienda`);
          break;
          
        case 'crawl-delay':
          this.validateCrawlDelay(value, lineNum);
          break;
          
        default:
          this.warnings.push(`Línea ${lineNum}: Directiva desconocida "${directive}"`);
      }
    });

    // Validaciones globales
    if (!hasUserAgent) {
      this.errors.push('Falta directiva User-agent requerida');
    }

    if (!hasSitemap) {
      this.warnings.push('Se recomienda incluir la directiva Sitemap');
    }

    // Sugerencias de optimización
    this.generateSEOSuggestions(content);
  }

  validateUserAgent(value, lineNum) {
    if (!value) {
      this.errors.push(`Línea ${lineNum}: User-agent no puede estar vacío`);
      return;
    }

    const commonBots = ['*', 'googlebot', 'bingbot', 'yahoobot', 'duckduckbot'];
    if (!commonBots.includes(value.toLowerCase()) && !value.includes('*')) {
      this.suggestions.push(`Línea ${lineNum}: Considera usar user-agents más comunes para mejor cobertura`);
    }
  }

  validateDisallow(value, lineNum, userAgent) {
    if (value === '') {
      // Disallow vacío es válido (permite todo)
      return;
    }

    if (!value.startsWith('/')) {
      this.errors.push(`Línea ${lineNum}: Disallow debe comenzar con '/' - "${value}"`);
    }

    // Verificar patrones comunes problemáticos
    if (value === '/') {
      this.warnings.push(`Línea ${lineNum}: Disallow: / bloquea todo el sitio - ¿es intencional?`);
    }

    // Sugerencias específicas para el sitio
    const unnecessaryPaths = ['/admin', '/login', '/cart', '/checkout'];
    if (unnecessaryPaths.some(path => value.startsWith(path))) {
      this.suggestions.push(`Línea ${lineNum}: "${value}" parece innecesario para un sitio de podología`);
    }
  }

  validateAllow(value, lineNum, userAgent) {
    if (!value.startsWith('/')) {
      this.errors.push(`Línea ${lineNum}: Allow debe comenzar con '/' - "${value}"`);
    }
  }

  validateSitemap(value, lineNum) {
    try {
      const url = new URL(value);
      if (!url.protocol.startsWith('http')) {
        this.errors.push(`Línea ${lineNum}: Sitemap debe usar protocolo HTTP/HTTPS`);
      }
      if (!value.endsWith('sitemap.xml')) {
        this.warnings.push(`Línea ${lineNum}: El sitemap debería terminar en 'sitemap.xml'`);
      }
    } catch (error) {
      this.errors.push(`Línea ${lineNum}: URL de sitemap inválida - "${value}"`);
    }
  }

  validateCrawlDelay(value, lineNum) {
    const delay = parseInt(value);
    if (isNaN(delay) || delay < 0) {
      this.errors.push(`Línea ${lineNum}: Crawl-delay debe ser un número positivo`);
    }
    if (delay > 10) {
      this.warnings.push(`Línea ${lineNum}: Crawl-delay alto (${delay}s) puede afectar indexación`);
    }
  }

  generateSEOSuggestions(content) {
    // Verificar si incluye directorios importantes
    const importantPaths = ['/blog/', '/servicios/', '/faq', '/tips/'];
    const hasAllowRules = importantPaths.some(path => 
      content.includes(`Allow: ${path}`)
    );

    if (!hasAllowRules) {
      this.suggestions.push('Considera agregar reglas Allow: explícitas para contenido SEO importante');
    }

    // Verificar comentarios descriptivos
    if (!content.includes('Podoclinicec') && !content.includes('podología')) {
      this.suggestions.push('Agregar comentarios descriptivos ayuda a identificar el propósito del archivo');
    }

    // Verificar crawlers específicos
    if (!content.includes('Googlebot') || !content.includes('Bingbot')) {
      this.suggestions.push('Considera agregar reglas específicas para Googlebot y Bingbot');
    }
  }

  generateReport() {
    console.log('\n📊 REPORTE DE VALIDACIÓN\n');

    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ ¡Robots.txt es válido y está bien optimizado!');
    }

    if (this.errors.length > 0) {
      console.log('❌ ERRORES CRÍTICOS:');
      this.errors.forEach((error, index) => {
        console.log(`   ${index + 1}. ${error}`);
      });
      console.log('');
    }

    if (this.warnings.length > 0) {
      console.log('⚠️  ADVERTENCIAS:');
      this.warnings.forEach((warning, index) => {
        console.log(`   ${index + 1}. ${warning}`);
      });
      console.log('');
    }

    if (this.suggestions.length > 0) {
      console.log('💡 SUGERENCIAS DE OPTIMIZACIÓN:');
      this.suggestions.forEach((suggestion, index) => {
        console.log(`   ${index + 1}. ${suggestion}`);
      });
      console.log('');
    }

    // Resumen
    console.log('📈 RESUMEN:');
    console.log(`   • Errores: ${this.errors.length}`);
    console.log(`   • Advertencias: ${this.warnings.length}`);
    console.log(`   • Sugerencias: ${this.suggestions.length}`);
    
    if (this.errors.length === 0) {
      console.log('   • Estado: ✅ Válido para producción');
    } else {
      console.log('   • Estado: ❌ Requiere correcciones');
    }
  }

  // Método para testing de URLs específicas
  testURL(robotsContent, url, userAgent = '*') {
    console.log(`\n🔍 Probando URL: ${url}`);
    console.log(`   User-agent: ${userAgent}`);
    
    const lines = robotsContent.split('\n');
    let currentAgent = null;
    let allowed = true; // Por defecto permitido
    
    for (const line of lines) {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('User-agent:')) {
        const agent = trimmed.split(':')[1].trim();
        currentAgent = agent;
      }
      
      if (currentAgent === userAgent || currentAgent === '*') {
        if (trimmed.startsWith('Disallow:')) {
          const path = trimmed.split(':')[1].trim();
          if (path && url.includes(path)) {
            allowed = false;
          }
        }
        
        if (trimmed.startsWith('Allow:')) {
          const path = trimmed.split(':')[1].trim();
          if (path && url.includes(path)) {
            allowed = true;
          }
        }
      }
    }
    
    console.log(`   Resultado: ${allowed ? '✅ Permitida' : '❌ Bloqueada'}`);
    return allowed;
  }
}

// Función principal
function main() {
  const robotsPath = 'public/robots.txt';
  
  if (!fs.existsSync(robotsPath)) {
    console.error('❌ No se encontró el archivo robots.txt en public/');
    return;
  }
  
  const validator = new RobotsValidator();
  validator.validateFile(robotsPath);
  
  // Si hay argumentos, probar URLs específicas
  const testURL = process.argv[2];
  if (testURL) {
    const content = fs.readFileSync(robotsPath, 'utf8');
    validator.testURL(content, testURL);
  }
  
  console.log('\n💡 Uso:');
  console.log('   node scripts/validate-robots.js                    # Validar robots.txt');
  console.log('   node scripts/validate-robots.js "/blog/uneros"     # Probar URL específica');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { RobotsValidator };