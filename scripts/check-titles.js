import { SEO_METADATA } from '../src/data/seo-metadata.js';

// Función para verificar títulos únicos
function checkUniqueTitles() {
  console.log('🔍 Verificando unicidad de títulos...\n');
  
  const titles = Object.values(SEO_METADATA).map(meta => meta.title);
  const uniqueTitles = new Set(titles);
  
  const isUnique = titles.length === uniqueTitles.size;
  
  if (isUnique) {
    console.log('✅ ÉXITO: Todos los títulos son únicos\n');
  } else {
    console.log('❌ ERROR: Se encontraron títulos duplicados\n');
    
    // Encontrar duplicados
    const duplicates = titles.filter((title, index) => titles.indexOf(title) !== index);
    const uniqueDuplicates = [...new Set(duplicates)];
    
    uniqueDuplicates.forEach((title, index) => {
      console.log(`${index + 1}. "${title}"\n`);
    });
  }
  
  console.log(`📊 Estadísticas:`);
  console.log(`   - Total de páginas: ${titles.length}`);
  console.log(`   - Títulos únicos: ${uniqueTitles.size}`);
  console.log(`   - Duplicados: ${titles.length - uniqueTitles.size}`);
  
  return isUnique;
}

// Mostrar todos los títulos
function showAllTitles() {
  console.log('\n📝 Todos los títulos por página:\n');
  
  Object.entries(SEO_METADATA).forEach(([page, meta], index) => {
    console.log(`${index + 1}. ${page}:`);
    console.log(`   "${meta.title}"\n`);
  });
}

function main() {
  console.log('🚀 SEO Titles Validator\n');
  console.log('=' .repeat(60));
  
  const isUnique = checkUniqueTitles();
  
  if (process.argv.includes('--show-all')) {
    showAllTitles();
  }
  
  process.exit(isUnique ? 0 : 1);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}