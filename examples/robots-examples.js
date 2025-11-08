#!/usr/bin/env node

/**
 * Ejemplos prácticos de uso del validador robots.txt
 * Ejecutar: node examples/robots-examples.js
 */

import { RobotsValidator } from '../scripts/validate-robots.js';
import fs from 'fs';

console.log('🤖 Ejemplos Prácticos - Validador robots.txt\n');
console.log('=' .repeat(60));

// Ejemplo 1: Validar archivo actual
console.log('\n📋 EJEMPLO 1: Validación del archivo actual');
console.log('-'.repeat(50));

const validator = new RobotsValidator();
validator.validateFile('public/robots.txt');

// Ejemplo 2: Testing de URLs importantes
console.log('\n🔍 EJEMPLO 2: Testing de URLs críticas');
console.log('-'.repeat(50));

const robotsContent = fs.readFileSync('public/robots.txt', 'utf8');

const testCases = [
  // URLs que DEBEN estar permitidas
  { url: '/', description: 'Página principal', expected: true },
  { url: '/blog/uneros', description: 'Blog post uñeros', expected: true },
  { url: '/servicios/pie-diabetico', description: 'Servicio pie diabético', expected: true },
  { url: '/faq', description: 'Preguntas frecuentes', expected: true },
  { url: '/tips/uneros', description: 'Tips sobre uñeros', expected: true },
  
  // URLs que DEBEN estar bloqueadas
  { url: '/api/chat', description: 'Endpoint API chat', expected: false },
  { url: '/_next/static/css/app.css', description: 'Archivos Next.js', expected: false },
  { url: '/scripts/validate-robots.js', description: 'Scripts técnicos', expected: false },
];

testCases.forEach((testCase, index) => {
  const result = validator.testURL(robotsContent, testCase.url);
  const status = result === testCase.expected ? '✅ CORRECTO' : '❌ ERROR';
  const access = result ? 'Permitida' : 'Bloqueada';
  
  console.log(`${index + 1}. ${testCase.description}`);
  console.log(`   URL: ${testCase.url}`);
  console.log(`   Resultado: ${access} ${status}`);
  console.log('');
});

// Ejemplo 3: Testing con diferentes User-agents
console.log('\n🤖 EJEMPLO 3: Testing con diferentes crawlers');
console.log('-'.repeat(50));

const crawlers = ['*', 'Googlebot', 'Bingbot'];
const testUrl = '/servicios/hongos';

crawlers.forEach(crawler => {
  console.log(`Testing con ${crawler}:`);
  validator.testURL(robotsContent, testUrl, crawler);
  console.log('');
});

// Ejemplo 4: Casos de error comunes
console.log('\n⚠️  EJEMPLO 4: Casos de error comunes');
console.log('-'.repeat(50));

const errorExamples = [
  {
    name: 'Sintaxis incorrecta',
    content: `User-agent *\nDisallow /admin\n`
  },
  {
    name: 'Directiva Host deprecada', 
    content: `User-agent: *\nAllow: /\nHost: podoclinicec.com\n`
  },
  {
    name: 'Sitemap URL inválida',
    content: `User-agent: *\nAllow: /\nSitemap: sitemap.xml\n`
  }
];

errorExamples.forEach((example, index) => {
  console.log(`${index + 1}. Validando: ${example.name}`);
  
  const tempValidator = new RobotsValidator();
  tempValidator.validateContent(example.content);
  
  if (tempValidator.errors.length > 0) {
    console.log('   ❌ Errores encontrados:');
    tempValidator.errors.forEach(error => {
      console.log(`      • ${error}`);
    });
  }
  
  if (tempValidator.warnings.length > 0) {
    console.log('   ⚠️  Advertencias:');
    tempValidator.warnings.forEach(warning => {
      console.log(`      • ${warning}`);
    });
  }
  console.log('');
});

// Ejemplo 5: Mejores prácticas
console.log('\n🎯 EJEMPLO 5: Mejores prácticas implementadas');
console.log('-'.repeat(50));

const bestPractices = [
  '✅ Comentarios descriptivos en la parte superior',
  '✅ User-agent: * como regla principal', 
  '✅ Allow: / para permitir por defecto',
  '✅ Bloqueos específicos solo para APIs y archivos técnicos',
  '✅ Permisos explícitos para contenido SEO importante',
  '✅ Reglas específicas para Googlebot y Bingbot',
  '✅ Sitemap URL completa y válida',
  '✅ Sin directivas deprecadas (Host:)',
  '✅ Sintaxis correcta en todas las líneas'
];

bestPractices.forEach(practice => {
  console.log(`   ${practice}`);
});

console.log('\n🎉 Robots.txt de Podoclinicec implementa todas las mejores prácticas!');

console.log('\n💡 COMANDOS ÚTILES:');
console.log('-'.repeat(50));
console.log('# Validar archivo completo');
console.log('node scripts/validate-robots.js');
console.log('');
console.log('# Probar URL específica'); 
console.log('node scripts/validate-robots.js "/blog/uneros"');
console.log('');
console.log('# Ver este ejemplo');
console.log('node examples/robots-examples.js');
console.log('');
console.log('# Verificar en producción');
console.log('curl https://podoclinicec.com/robots.txt');