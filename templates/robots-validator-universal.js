#!/usr/bin/env node

/**
 * 🤖 TEMPLATE UNIVERSAL - Validador robots.txt  
 * 
 * INSTRUCCIONES DE USO:
 * 1. Copia este archivo a tu nuevo proyecto: examples/robots-validator.js
 * 2. Copia también: scripts/validate-robots.js 
 * 3. Personaliza las URLs en la sección "PERSONALIZAR AQUÍ"
 * 4. Ejecuta: node examples/robots-validator.js
 * 
 * Creado por: Sistema SEO Podoclinicec
 * Versión: 1.0 - Noviembre 2025
 */

import { RobotsValidator } from '../scripts/validate-robots.js';
import fs from 'fs';

// ================================
// PERSONALIZAR AQUÍ - CONFIGURACIÓN DEL PROYECTO
// ================================

const PROJECT_CONFIG = {
  name: 'Mi Proyecto',  // 👈 CAMBIAR: Nombre de tu proyecto
  domain: 'mi-dominio.com',  // 👈 CAMBIAR: Tu dominio
  industry: 'General',  // 👈 CAMBIAR: Tu industria (e-commerce, blog, saas, etc.)
};

// 👈 PERSONALIZAR: URLs específicas de tu proyecto
const TEST_CASES = [
  // ========== RUTAS PÚBLICAS (deben estar permitidas) ==========
  { url: '/', description: 'Página principal', expected: true },
  { url: '/about', description: 'Acerca de nosotros', expected: true },
  { url: '/contact', description: 'Contacto', expected: true },
  { url: '/services', description: 'Servicios', expected: true },
  { url: '/blog', description: 'Blog', expected: true },
  { url: '/products', description: 'Productos', expected: true },
  
  // 👈 AGREGAR MÁS RUTAS PÚBLICAS AQUÍ
  
  // ========== RUTAS PRIVADAS/TÉCNICAS (deben estar bloqueadas) ==========
  { url: '/api/users', description: 'API usuarios', expected: false },
  { url: '/api/orders', description: 'API pedidos', expected: false },
  { url: '/admin', description: 'Panel administrador', expected: false },
  { url: '/dashboard', description: 'Dashboard usuarios', expected: false },
  { url: '/_next/static/css/app.css', description: 'Archivos técnicos', expected: false },
  
  // 👈 AGREGAR MÁS RUTAS PRIVADAS AQUÍ
];

// 👈 PERSONALIZAR: Crawlers relevantes para tu industria
const CRAWLERS_TO_TEST = ['*', 'Googlebot', 'Bingbot', 'DuckDuckBot'];

// 👈 PERSONALIZAR: Mejores prácticas específicas de tu industria
const BEST_PRACTICES = [
  `✅ Comentarios descriptivos para ${PROJECT_CONFIG.industry}`,
  '✅ User-agent: * como regla principal', 
  '✅ Allow: / para permitir por defecto',
  '✅ Bloqueos específicos solo para APIs y contenido sensible',
  '✅ Permisos explícitos para contenido SEO importante',
  '✅ Reglas específicas para crawlers principales',
  '✅ Sitemap URL completa y válida',
  '✅ Sin directivas deprecadas o incorrectas',
  '✅ Sintaxis perfecta en todas las líneas',
  `✅ Optimizado para ${PROJECT_CONFIG.industry} y SEO local`
];

// ================================
// NO MODIFICAR DEBAJO DE ESTA LÍNEA
// ================================

console.log(`🤖 Validador robots.txt - ${PROJECT_CONFIG.name}\n`);
console.log('=' .repeat(60));

// Ejemplo 1: Validar archivo actual
console.log('\n📋 VALIDACIÓN DEL ARCHIVO ROBOTS.TXT');
console.log('-'.repeat(50));

const validator = new RobotsValidator();
const robotsPath = 'public/robots.txt';

if (!fs.existsSync(robotsPath)) {
  console.error('❌ No se encontró public/robots.txt');
  console.log('💡 Crea el archivo primero con contenido básico:');
  console.log(`
User-agent: *
Allow: /

Disallow: /api/
Disallow: /_next/

Sitemap: https://${PROJECT_CONFIG.domain}/sitemap.xml
  `);
  process.exit(1);
}

validator.validateFile(robotsPath);

// Ejemplo 2: Testing de URLs críticas
console.log('\n🔍 TESTING DE URLs ESPECÍFICAS DEL PROYECTO');
console.log('-'.repeat(50));

const robotsContent = fs.readFileSync(robotsPath, 'utf8');
let allTestsPassed = true;

TEST_CASES.forEach((testCase, index) => {
  const result = validator.testURL(robotsContent, testCase.url);
  const status = result === testCase.expected ? '✅ CORRECTO' : '❌ ERROR';
  const access = result ? 'Permitida' : 'Bloqueada';
  
  if (result !== testCase.expected) {
    allTestsPassed = false;
  }
  
  console.log(`${index + 1}. ${testCase.description}`);
  console.log(`   URL: ${testCase.url}`);
  console.log(`   Resultado: ${access} ${status}`);
  console.log('');
});

// Ejemplo 3: Testing con diferentes crawlers
console.log('\n🤖 TESTING CON DIFERENTES CRAWLERS');
console.log('-'.repeat(50));

const sampleUrl = TEST_CASES.find(t => t.expected === true)?.url || '/';
CRAWLERS_TO_TEST.forEach(crawler => {
  console.log(`Testing ${sampleUrl} con ${crawler}:`);
  validator.testURL(robotsContent, sampleUrl, crawler);
  console.log('');
});

// Ejemplo 4: Verificar mejores prácticas
console.log('\n🎯 MEJORES PRÁCTICAS IMPLEMENTADAS');
console.log('-'.repeat(50));

const practiceChecks = [
  { 
    practice: 'Comentarios descriptivos', 
    check: () => robotsContent.includes(PROJECT_CONFIG.name) || robotsContent.includes('#')
  },
  { 
    practice: 'User-agent: * presente', 
    check: () => robotsContent.includes('User-agent: *')
  },
  { 
    practice: 'Allow: / por defecto', 
    check: () => robotsContent.includes('Allow: /')
  },
  { 
    practice: 'Bloqueos para APIs', 
    check: () => robotsContent.includes('Disallow: /api')
  },
  { 
    practice: 'Sitemap incluido', 
    check: () => robotsContent.includes('Sitemap:')
  },
  { 
    practice: 'Sin directiva Host deprecada', 
    check: () => !robotsContent.includes('Host:')
  }
];

practiceChecks.forEach((item, index) => {
  const status = item.check() ? '✅' : '❌';
  console.log(`   ${status} ${item.practice}`);
});

// Resumen final
console.log('\n📊 RESUMEN FINAL');
console.log('-'.repeat(50));

if (allTestsPassed) {
  console.log('🎉 ¡TODOS LOS TESTS PASARON!');
  console.log(`✅ Robots.txt de ${PROJECT_CONFIG.name} está correctamente configurado`);
} else {
  console.log('⚠️  ALGUNOS TESTS FALLARON');
  console.log('🔧 Revisa las URLs marcadas con ❌ ERROR y ajusta tu robots.txt');
}

console.log(`\n📈 Estado: ${allTestsPassed ? 'LISTO PARA PRODUCCIÓN' : 'REQUIERE AJUSTES'}`);

console.log('\n💡 COMANDOS ÚTILES PARA ESTE PROYECTO:');
console.log('-'.repeat(50));
console.log('# Validar robots.txt');
console.log('node scripts/validate-robots.js');
console.log('');
console.log('# Ejecutar este validador completo'); 
console.log('node examples/robots-validator.js');
console.log('');
console.log('# Probar URL específica');
console.log('node scripts/validate-robots.js "/tu-url-aqui"');
console.log('');
console.log('# Verificar en producción');
console.log(`curl https://${PROJECT_CONFIG.domain}/robots.txt`);

console.log('\n🎯 PRÓXIMOS PASOS RECOMENDADOS:');
console.log('-'.repeat(50));
if (allTestsPassed) {
  console.log('1. Subir robots.txt a producción');
  console.log('2. Verificar acceso web: curl https://tu-dominio.com/robots.txt');
  console.log('3. Enviar sitemap a Google Search Console');
  console.log('4. Monitorear indexación en 1-2 semanas');
} else {
  console.log('1. Corregir URLs marcadas con ❌ ERROR');
  console.log('2. Ejecutar validador nuevamente');
  console.log('3. Cuando todos los tests pasen, subir a producción');
}