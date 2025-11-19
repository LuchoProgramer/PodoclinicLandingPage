# 🔧 Quick Start Template - Sistema Híbrido CMS

Plantilla rápida para implementar el sistema híbrido en nuevos proyectos.

## 📋 Pasos Rápidos (30 minutos)

### 1. **Variables de Entorno** (`.env.local`)
```bash
# CMS Configuration
NEXT_PUBLIC_CMS_URL=https://tu-cms.com/api
NEXT_PUBLIC_CMS_TENANT_ID=tu-tenant-id

# Optional: Para development
NODE_ENV=development
```

### 2. **CMS Proxy** (`/app/api/cms-proxy/route.ts`)
```typescript
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const tenantId = process.env.NEXT_PUBLIC_CMS_TENANT_ID;
  
  console.log('[CMS-PROXY] Request received:', { cmsUrl: !!cmsUrl, tenantId: !!tenantId });
  
  if (!cmsUrl || !tenantId) {
    console.log('[CMS-PROXY] Missing configuration');
    return NextResponse.json({ 
      error: 'CMS configuration missing',
      available: false 
    }, { status: 500 });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    console.log('[CMS-PROXY] Fetching from CMS...');
    
    const response = await fetch(`${cmsUrl}/posts?tenant=${tenantId}`, {
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'NextJS-App/1.0',
        'Accept': 'application/json'
      }
    });

    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('[CMS-PROXY] Success:', data.length || 0, 'posts');
    
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });
    
  } catch (error: any) {
    console.error('[CMS-PROXY] Error:', error.message);
    
    return NextResponse.json({ 
      error: 'CMS temporarily unavailable',
      available: false,
      details: error.message 
    }, { status: 503 });
  }
}
```

### 3. **Datos Locales** (`/src/data/blog/posts.ts`)
```typescript
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  author?: string;
  tags?: string[];
  source: 'local' | 'cms';
}

// Agrega tus posts locales aquí
export const localBlogPosts: BlogPost[] = [
  {
    id: 'local-1',
    title: 'Mi Primer Post',
    excerpt: 'Descripción del post...',
    image: '/images/post-1.jpg',
    date: '2024-01-01',
    category: 'General',
    slug: 'mi-primer-post',
    source: 'local'
  }
  // ... más posts
];
```

### 4. **Capa Híbrida** (`/src/data/hybrid-blog-posts.ts`)
```typescript
import { localBlogPosts, type BlogPost } from './blog/posts';

interface PostStats {
  totalPosts: number;
  localPosts: number;
  cmsPosts: number;
  status: 'cms-available' | 'local-only' | 'emergency';
  message: string;
}

// Sistema de emergencia
const EMERGENCY_DATA = {
  posts: [
    {
      id: 'emergency-1',
      title: 'Contenido Temporalmente No Disponible',
      excerpt: 'Estamos actualizando nuestro contenido. Por favor, vuelve pronto.',
      image: '/images/maintenance.jpg',
      date: new Date().toISOString().split('T')[0],
      category: 'Sistema',
      slug: 'mantenimiento',
      source: 'local' as const
    }
  ]
};

async function fetchCMSPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/api/cms-proxy', {
      next: { revalidate: 300 } // Cache por 5 minutos
    });
    
    if (!response.ok) {
      throw new Error(`CMS API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.error || !data.length) {
      throw new Error('No CMS posts available');
    }
    
    return data.map((post: any) => ({
      id: `cms-${post.id}`,
      title: post.title,
      excerpt: post.excerpt || post.summary,
      image: post.image || post.featured_image,
      date: post.date || post.published_at,
      category: post.category || 'CMS',
      slug: post.slug,
      source: 'cms' as const,
      content: post.content
    }));
    
  } catch (error) {
    console.warn('CMS posts not available:', error);
    return [];
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const cmsPosts = await fetchCMSPosts();
    const allPosts = [...localBlogPosts, ...cmsPosts];
    
    // Ordenar por fecha (más reciente primero)
    return allPosts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.warn('Error getting posts, using local only:', error);
    return localBlogPosts;
  }
}

export async function getFeaturedPosts(limit: number = 2): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, limit);
}

export async function getRecentPosts(limit: number = 6): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, limit);
}

export async function getPostStats(): Promise<PostStats> {
  try {
    const allPosts = await getAllPosts();
    const localCount = allPosts.filter(p => p.source === 'local').length;
    const cmsCount = allPosts.filter(p => p.source === 'cms').length;
    
    const status = cmsCount > 0 ? 'cms-available' : 'local-only';
    const message = cmsCount > 0 
      ? `${localCount} posts locales + ${cmsCount} posts del CMS`
      : `${localCount} posts locales disponibles`;
    
    return {
      totalPosts: allPosts.length,
      localPosts: localCount,
      cmsPosts: cmsCount,
      status,
      message
    };
  } catch (error) {
    throw error;
  }
}

export async function getPostStatsWithFallback(): Promise<PostStats> {
  try {
    return await getPostStats();
  } catch (error) {
    console.warn('Activando sistema de emergencia:', error);
    return {
      totalPosts: EMERGENCY_DATA.posts.length,
      localPosts: 0,
      cmsPosts: 0,
      status: 'emergency',
      message: 'Sistema de respaldo activo - Contenido limitado disponible'
    };
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const allPosts = await getAllPosts();
  return allPosts.find(post => post.slug === slug) || null;
}
```

### 5. **Componente Frontend** (`/src/components/HybridBlogContent.tsx`)
```typescript
'use client';

import { useState, useEffect } from 'react';
import { BlogPost, getRecentPosts, getFeaturedPosts, getPostStatsWithFallback } from '@/data/hybrid-blog-posts';

interface PostStats {
  totalPosts: number;
  localPosts: number;
  cmsPosts: number;
  status: 'cms-available' | 'local-only' | 'emergency';
  message: string;
}

const StatusBanner = ({ stats }: { stats: PostStats }) => {
  const getStatusConfig = () => {
    switch (stats.status) {
      case 'cms-available':
        return {
          color: 'bg-green-100 text-green-800 border-green-200',
          icon: '✅',
          title: 'Sistema Completo Activo'
        };
      case 'local-only':
        return {
          color: 'bg-gray-100 text-gray-800 border-gray-200',
          icon: '📋',
          title: 'Contenido Local'
        };
      case 'emergency':
        return {
          color: 'bg-orange-100 text-orange-800 border-orange-200',
          icon: '⚠️',
          title: 'Sistema de Respaldo'
        };
    }
  };

  const config = getStatusConfig();
  
  return (
    <div className={`border rounded-lg p-3 mb-6 ${config.color}`}>
      <div className="flex items-center gap-2">
        <span className="text-lg">{config.icon}</span>
        <div>
          <h3 className="font-semibold text-sm">{config.title}</h3>
          <p className="text-xs opacity-90">{stats.message}</p>
        </div>
      </div>
    </div>
  );
};

const PostCard = ({ post }: { post: BlogPost }) => (
  <article className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
    <img 
      src={post.image} 
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <span className="text-xs text-blue-600 font-medium">{post.category}</span>
      <h3 className="font-bold text-lg mt-1 mb-2">{post.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span className="bg-gray-100 px-2 py-1 rounded">{post.source}</span>
      </div>
    </div>
  </article>
);

export default function HybridBlogContent() {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [stats, setStats] = useState<PostStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [featured, recent, postStats] = await Promise.all([
          getFeaturedPosts(2),
          getRecentPosts(6),
          getPostStatsWithFallback()
        ]);

        setFeaturedPosts(featured);
        setRecentPosts(recent);
        setStats(postStats);
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <div className="animate-pulse">Cargando blog...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {stats && <StatusBanner stats={stats} />}
      
      {/* Posts Destacados */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Posts Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Posts Recientes */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Posts Recientes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
```

### 6. **Página del Blog** (`/app/blog/page.tsx`)
```typescript
import HybridBlogContent from '@/components/HybridBlogContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Tu Sitio',
  description: 'Últimas noticias y artículos de nuestro blog'
};

export default function BlogPage() {
  return (
    <main>
      <HybridBlogContent />
    </main>
  );
}
```

### 7. **Sitemap Dinámico** (`/app/sitemap.ts`)
```typescript
import { MetadataRoute } from 'next';
import { getAllPosts } from '@/data/hybrid-blog-posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const posts = await getAllPosts();
    
    const blogEntries: MetadataRoute.Sitemap = posts.map(post => ({
      url: `https://tudominio.com/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    return [
      {
        url: 'https://tudominio.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://tudominio.com/blog',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      ...blogEntries,
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Fallback básico
    return [
      {
        url: 'https://tudominio.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://tudominio.com/blog',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      }
    ];
  }
}
```

### 8. **Deploy en Netlify** (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[functions]
  node_bundler = "esbuild"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/___netlify-handler"
  status = 200

[build.environment]
  NODE_ENV = "production"
```

---

## 🚀 Comandos de Deploy

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores

# 3. Test local
npm run dev

# 4. Build y test
npm run build
npm start

# 5. Deploy a Netlify
netlify deploy --prod

# O deploy automático conectando el repo a Netlify
```

---

## ✅ Checklist Rápido

- [ ] Variables de entorno configuradas
- [ ] CMS Proxy funcionando (`/api/cms-proxy`)  
- [ ] Posts locales agregados
- [ ] Componente renderizando correctamente
- [ ] Build exitoso sin errores
- [ ] Sitemap generándose con ambos tipos de posts
- [ ] Deploy funcionando en producción

---

**⏱️ Tiempo total de implementación: ~30 minutos**

¡Tu sistema híbrido estará listo para usar!