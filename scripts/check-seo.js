#!/usr/bin/env node

import { getAllDescriptions, validateUniqueDescriptions } from '../src/data/seo-metadata.js';

// Verificar que todas las meta descriptions sean únicas
function checkUniqueDescriptions() {
  console.log('🔍 Verificando unicidad de meta descriptions...\n');
  
  const isUnique = validateUniqueDescriptions();
  
  if (isUnique) {
    console.log('✅ ÉXITO: Todas las meta descriptions son únicas\n');
  } else {
    console.log('❌ ERROR: Se encontraron meta descriptions duplicadas\n');
    
    // Mostrar todas las descriptions para identificar duplicados
    const allDescriptions = getAllDescriptions();
    const descriptions = Object.values(allDescriptions);
    const duplicates = descriptions.filter((desc, index) => descriptions.indexOf(desc) !== index);
    
    if (duplicates.length > 0) {
      console.log('🔸 Meta descriptions duplicadas encontradas:');
      const uniqueDuplicates = [...new Set(duplicates)];
      uniqueDuplicates.forEach((desc, index) => {
        console.log(`${index + 1}. "${desc}"\n`);
        
        // Encontrar qué páginas tienen esta description
        const pagesWithDuplicate = Object.entries(allDescriptions)
          .filter(([, pageDesc]) => pageDesc === desc)
          .map(([page]) => page);
        
        console.log(`   Páginas afectadas: ${pagesWithDuplicate.join(', ')}\n`);
      });
    }
  }
  
  // Mostrar estadísticas
  const allDescriptions = getAllDescriptions();
  console.log(`📊 Estadísticas:`);
  console.log(`   - Total de páginas: ${Object.keys(allDescriptions).length}`);
  console.log(`   - Meta descriptions únicas: ${new Set(Object.values(allDescriptions)).size}`);
  
  return isUnique;
}

// Mostrar todas las meta descriptions organizadas
function showAllDescriptions() {
  console.log('\n📝 Todas las meta descriptions por página:\n');
  
  const allDescriptions = getAllDescriptions();
  Object.entries(allDescriptions).forEach(([page, description], index) => {
    console.log(`${index + 1}. ${page}:`);
    console.log(`   "${description}"\n`);
  });
}

// Ejecutar verificaciones
function main() {
  console.log('🚀 SEO Meta Descriptions Validator\n');
  console.log('=' .repeat(50));
  
  const isUnique = checkUniqueDescriptions();
  
  if (process.argv.includes('--show-all')) {
    showAllDescriptions();
  }
  
  if (process.argv.includes('--help')) {
    console.log('\n📖 Uso:');
    console.log('   node check-seo.js                 # Verificar unicidad');
    console.log('   node check-seo.js --show-all      # Mostrar todas las descriptions');
    console.log('   node check-seo.js --help          # Mostrar esta ayuda');
  }
  
  process.exit(isUnique ? 0 : 1);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}