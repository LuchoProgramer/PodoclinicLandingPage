#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Simulación de las rutas que debería tener el sitemap
const EXPECTED_ROUTES = [
  // Páginas principales
  '/',
  '/faq',
  '/tips', 
  '/blog',
  
  // Servicios
  '/servicios',
  '/servicios/uneros',
  '/servicios/pie-diabetico', // ⚠️ Falta crear esta página
  '/servicios/hongos',
  '/servicios/profilaxis',
  '/servicios/verrugas',
  '/servicios/domicilio',
  
  // Landing pages específicas
  '/uneros-quito',
  '/podologo-en-quito', 
  '/podologia-quito-norte',
  '/podologia-runners', // ⚠️ Verificar si existe
  
  // Blog - categorías
  '/blog/uneros',
  '/blog/pie-diabetico',
  '/blog/hongos',
  '/blog/podologia-deportiva',
  '/blog/local',
  '/blog/cuidado-preventivo',
  
  // Blog - posts específicos
  '/blog/local/podologia-domicilio-quito-norte',
  '/blog/pie-diabetico/guia-prevenir-pie-diabetico-quito',
  '/blog/podologia-deportiva/podologia-runners-quito',
  '/blog/local/podologo-la-florida-quito-norte',
  '/blog/uneros/faq-podologia-domicilio-quito',
  '/blog/uneros/unas-encarnadas-domicilio-quito',
  '/blog/uneros/senales-unero-urgente',
  '/blog/pie-diabetico/cuidado-pies-diabeticos-guia',
  '/blog/hongos/hongos-unas-tratamiento-efectivo',
  
  // Tips
  '/tips/uneros',
  '/tips/verano'
];

// URLs que están en el sitemap pero podrían no existir
const SITEMAP_URLS = [
  '/servicios/pie-diabetico', // ⚠️ Esta página no existe
  '/podologia-runners', // ⚠️ Verificar si existe
];

function checkFileExists(routePath) {
  const appDir = 'src/app';
  
  // Convertir ruta a path de archivo
  let filePath = routePath === '/' ? 
    path.join(appDir, 'page.tsx') :
    path.join(appDir, routePath.substring(1), 'page.tsx');
  
  return fs.existsSync(filePath);
}

function validateSitemapRoutes() {
  console.log('🔍 Validando rutas del sitemap...\n');
  
  const missingPages = [];
  const existingPages = [];
  
  EXPECTED_ROUTES.forEach(route => {
    if (checkFileExists(route)) {
      existingPages.push(route);
    } else {
      missingPages.push(route);
    }
  });
  
  console.log('✅ Páginas que existen:');
  existingPages.forEach(page => console.log(`   ${page}`));
  
  if (missingPages.length > 0) {
    console.log('\n❌ Páginas que faltan:');
    missingPages.forEach(page => console.log(`   ${page}`));
  }
  
  console.log(`\n📊 Resumen:`);
  console.log(`   - Páginas existentes: ${existingPages.length}`);
  console.log(`   - Páginas faltantes: ${missingPages.length}`);
  console.log(`   - Total esperado: ${EXPECTED_ROUTES.length}`);
  
  return {
    existing: existingPages,
    missing: missingPages,
    coverage: (existingPages.length / EXPECTED_ROUTES.length) * 100
  };
}

function checkSitemapIssues(missingPages) {
  console.log('\n🔍 Problemas identificados en el sitemap:\n');
  
  const issues = missingPages.map(page => ({
    url: page,
    issue: 'Página no existe',
    solution: 'Crear la página o remover del sitemap'
  }));
  
  issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.url}`);
    console.log(`   Problema: ${issue.issue}`);
    console.log(`   Solución: ${issue.solution}\n`);
  });
  
  return issues;
}

function main() {
  console.log('🚀 Validador de Sitemap y Contenido\n');
  console.log('=' .repeat(50));
  
  const validation = validateSitemapRoutes();
  const issues = checkSitemapIssues(validation.missing);
  
  console.log(`\n📈 Cobertura del sitemap: ${validation.coverage.toFixed(1)}%`);
  
  if (issues.length > 0) {
    console.log(`\n⚠️  Se encontraron ${issues.length} problemas que requieren atención.`);
  } else {
    console.log('\n✅ No se encontraron problemas críticos.');
  }
  
  if (process.argv.includes('--missing')) {
    console.log('\n📝 Páginas recomendadas para crear:');
    validation.missing.forEach(page => {
      console.log(`   ${page} - Importante para SEO`);
    });
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

console.log('\n💡 Uso: node check-sitemap.js [--missing]');