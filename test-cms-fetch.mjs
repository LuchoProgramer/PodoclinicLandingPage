const baseUrl = 'https://pukapresscms.vercel.app';
const tenantId = 'zCXAU8FLaGX4UHgnrPfI';
const url = `${baseUrl}/api/blogs?tenant=${tenantId}&limit=50`;

console.log('🔍 Testing CMS fetch...');
console.log('URL:', url);

try {
    const response = await fetch(url);
    const data = await response.json();
    
    console.log('\n📊 Results:');
    console.log('Total blogs:', data.blogs.length);
    console.log('\n📝 Blogs found:');
    
    data.blogs.forEach((blog, index) => {
        console.log(`\n${index + 1}. ${blog.title}`);
        console.log(`   slug: ${blog.slug}`);
        console.log(`   category: ${blog.category || '❌ NO CATEGORY'}`);
        console.log(`   image: ${blog.image ? '✅ YES' : '❌ NO'}`);
        console.log(`   content: ${blog.content ? '✅ YES' : '❌ NO'}`);
        console.log(`   excerpt: ${blog.excerpt ? '✅ YES' : '❌ NO'}`);
    });
    
    console.log('\n\n🎯 generateStaticParams would return:');
    data.blogs.forEach(blog => {
        if (blog.slug && blog.category) {
            console.log(`   { category: "${blog.category}", slug: "${blog.slug}" }`);
        } else {
            console.log(`   ❌ SKIPPED (missing slug or category): ${blog.title}`);
        }
    });
    
} catch (error) {
    console.error('❌ Error:', error.message);
}
