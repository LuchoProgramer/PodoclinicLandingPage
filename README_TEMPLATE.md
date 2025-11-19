# 🚀 Template Profesional Configurable

## 📋 Descripción

Template Next.js 15+ profesional y completamente configurable para diferentes industrias. Desarrollado a partir del exitoso proyecto PodoClinic, este template permite crear sitios web profesionales en **menos de 30 minutos**.

### ✨ Características Principales

- ✅ **100% Configurable** - Sin hardcodear contenido
- ✅ **Multi-Industria** - Médico, Business, Creativo, Servicios Locales
- ✅ **Sistema Híbrido CMS** - Contenido local + CMS externo
- ✅ **SEO Avanzado** - Sitemap dinámico, metadata optimizada
- ✅ **Responsive Design** - Mobile-first con Next.js Image
- ✅ **Performance Optimizado** - Core Web Vitals optimizados
- ✅ **Analytics Integrado** - GA4, Facebook, TikTok Pixel
- ✅ **Themes CSS** - 5 temas predefinidos + personalizable
- ✅ **Setup Automatizado** - Script interactivo de configuración

---

## 🎯 Casos de Uso

### 🏥 Medical/Healthcare
- Clínicas y consultorios
- Doctores y especialistas
- Centros médicos
- Servicios de salud

### 💼 Business/Corporate
- Consultoras
- Agencias
- Servicios B2B
- Empresas tecnológicas

### 🎨 Creative/Design
- Estudios de diseño
- Fotógrafos
- Agencias creativas
- Freelancers

### 🏪 Local Services
- Restaurantes
- Servicios locales
- Comercios
- Profesionales independientes

---

## 🚀 Instalación Rápida

### Prerequisitos
- Node.js 18+ 
- npm o yarn
- Git

### 1. Clonar Template
```bash
git clone https://github.com/tu-usuario/template-profesional.git mi-proyecto
cd mi-proyecto
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Ejecutar Setup Automatizado
```bash
npm run setup
```

El script te guiará por:
- ✅ Información de la empresa
- ✅ Selección de industria/tema
- ✅ Configuración de contacto
- ✅ Personalización de colores
- ✅ Configuración de servicios
- ✅ Generación automática de archivos

### 4. Iniciar Desarrollo
```bash
npm run dev
```

**¡Listo! Tu sitio estará funcionando en `http://localhost:3000`**

---

## 📁 Estructura del Proyecto

```
├── 📁 config/
│   ├── template.config.ts      # Configuraciones base por industria
│   └── client.config.ts        # Configuración generada por setup
├── 📁 src/
│   ├── 📁 components/
│   │   ├── TemplateHero.tsx    # Hero configurable
│   │   ├── TemplateServicios.tsx # Servicios dinámicos
│   │   ├── TemplateFooter.tsx  # Footer adaptable
│   │   └── TemplateConfigurator.tsx # Configurador visual
│   ├── 📁 styles/
│   │   └── themes.css          # Sistema de themes CSS
│   └── 📁 data/
│       └── hybrid-blog-posts.ts # Sistema híbrido CMS
├── 📁 scripts/
│   └── setup-template.js       # Script de configuración automática
├── 📁 docs/
│   ├── QUICK_START.md          # Guía rápida
│   ├── CUSTOMIZATION.md        # Personalización avanzada
│   └── DEPLOYMENT.md           # Guía de deploy
└── package.json
```

---

## ⚙️ Configuración

### Configuración Básica

El template se configura a través del archivo `config/client.config.ts`:

```typescript
export const CLIENT_CONFIG: TemplateConfig = {
  business: {
    name: "Mi Empresa",
    tagline: "Especialistas en Excelencia",
    industry: "medical" // medical | business | creative | local
  },
  branding: {
    primaryColor: "#60BEC3",
    secondaryColor: "#059669", 
    accentColor: "#0891b2",
    theme: "medical"
  },
  contact: {
    phone: "+593995832788",
    email: "contacto@miempresa.com",
    whatsapp: "593995832788"
  },
  services: [
    {
      id: "servicio-1",
      title: "Servicio Principal",
      description: "Descripción del servicio...",
      icon: "🎯",
      price: "Desde $50"
    }
  ]
};
```

### Temas Disponibles

#### 🏥 Medical Theme
```css
--primary-color: #60BEC3    /* Verde médico */
--secondary-color: #059669  /* Verde oscuro */
--accent-color: #0891b2     /* Azul complementario */
```

#### 💼 Business Theme  
```css
--primary-color: #3730a3    /* Azul corporativo */
--secondary-color: #1e40af  /* Azul oscuro */
--accent-color: #059669     /* Verde complementario */
```

#### 🎨 Creative Theme
```css
--primary-color: #c026d3    /* Magenta creativo */
--secondary-color: #a21caf  /* Magenta oscuro */
--accent-color: #ea580c     /* Naranja complementario */
```

---

## 🎨 Personalización

### Cambiar Colores Dinámicamente

```typescript
import { useTemplate } from '@/components/TemplateProvider';

function MiComponente() {
  const { updateColors } = useTemplate();
  
  const cambiarColores = () => {
    updateColors({
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1'
    });
  };
}
```

### Cambiar Tema/Industria

```typescript
const { switchTheme } = useTemplate();

// Cambiar a tema business
switchTheme('business');
```

### Configurador Visual

Para testing y demos, incluye un configurador visual:

```typescript
import TemplateConfigurator from '@/components/TemplateConfigurator';

// Agregar al layout para testing
<TemplateConfigurator onConfigChange={handleConfigChange} />
```

---

## 🔌 Integraciones

### Sistema Híbrido CMS

Combina contenido local con CMS externo:

```typescript
// Configurar CMS
cms: {
  enabled: true,
  provider: "custom",
  apiUrl: process.env.NEXT_PUBLIC_CMS_URL,
  tenantId: process.env.NEXT_PUBLIC_CMS_TENANT_ID
}
```

### Analytics

```typescript
analytics: {
  googleAnalytics: "G-XXXXXXXXXX",
  facebookPixel: "XXXXXXXXXXXX", 
  tiktokPixel: "XXXXXXXXXXXX"
}
```

### Variables de Entorno

```bash
# .env.local
NEXT_PUBLIC_SITE_NAME="Mi Empresa"
NEXT_PUBLIC_PRIMARY_COLOR="#60BEC3"
NEXT_PUBLIC_PHONE="+593995832788"
NEXT_PUBLIC_CMS_URL="https://mi-cms.com/api"
```

---

## 📱 Componentes Principales

### TemplateHero
Hero section completamente configurable

```typescript
<TemplateHero />
```

**Props automáticas desde configuración:**
- Título y subtítulo
- Descripción 
- CTAs dinámicos
- Enlaces rápidos
- Badges de credibilidad

### TemplateServicios
Grid de servicios adaptable

```typescript
<TemplateServicios 
  maxServices={6}
  layout="grid" // grid | carousel | list
  showTitle={true}
/>
```

### TemplateFooter
Footer con enlaces automáticos

```typescript
<TemplateFooter />
```

**Incluye automáticamente:**
- Información de contacto
- Links a servicios
- Redes sociales
- Links legales

---

## 🚀 Deploy

### Netlify (Recomendado)

```bash
# Build
npm run build

# Deploy
netlify deploy --prod
```

#### netlify.toml
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
```

### Vercel

```bash
npm run build
vercel --prod
```

### Otras Plataformas

Compatible con cualquier plataforma que soporte Next.js:
- AWS Amplify
- Railway
- Heroku
- Digital Ocean

---

## 💰 Modelo de Negocio

### Precios Sugeridos por Template

#### 🏥 Medical Template
- **Básico**: $800 - $1,200
- **Premium**: $1,500 - $2,500
- **Enterprise**: $2,500 - $4,000

#### 💼 Business Template  
- **Básico**: $600 - $1,000
- **Premium**: $1,200 - $2,000
- **Enterprise**: $2,000 - $3,500

#### 🎨 Creative Template
- **Básico**: $700 - $1,100  
- **Premium**: $1,400 - $2,200
- **Enterprise**: $2,200 - $3,800

### Servicios Adicionales

- **Setup Personalizado**: $200 - $400
- **Capacitación**: $100 - $200
- **Mantenimiento Mensual**: $50 - $150
- **Customización Avanzada**: $300 - $800

---

## 🧪 Testing

### Test Local

```bash
# Desarrollo
npm run dev

# Build test
npm run build
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

### Test con Diferentes Configuraciones

```bash
# Medical theme
npm run setup:medical

# Business theme  
npm run setup:business

# Creative theme
npm run setup:creative
```

---

## 🐛 Troubleshooting

### Problemas Comunes

#### Build Failures
```bash
# Limpiar cache
rm -rf .next
npm run build
```

#### Configuración no Aplicada
```bash
# Verificar archivo de configuración
cat config/client.config.ts

# Regenerar configuración
npm run setup
```

#### Colores no Cambian
```bash
# Verificar variables CSS
console.log(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'))
```

### Debug Mode

```bash
# Activar debug
export DEBUG=template:*
npm run dev
```

---

## 🤝 Contribuir

### Desarrollo

```bash
git clone [repo]
npm install
npm run dev
```

### Agregar Nuevos Temas

1. Agregar configuración en `config/template.config.ts`
2. Crear estilos CSS en `src/styles/themes.css`
3. Actualizar script de setup
4. Documentar cambios

### Reportar Issues

- 🐛 **Bugs**: Usar template de issue
- 💡 **Features**: Crear feature request
- 📖 **Documentación**: Mejorar docs

---

## 📄 Licencia

MIT License - Libre para uso comercial y personal.

---

## 🏆 Créditos

Desarrollado por **Luis Viteri** basado en el exitoso proyecto **PodoClinic**.

### Tecnologías

- ⚡ **Next.js 15+** - Framework React
- 🎨 **Tailwind CSS** - Styling
- 📱 **Lucide React** - Iconografía  
- 🔍 **TypeScript** - Type safety
- 🚀 **Netlify** - Hosting recomendado

---

## 📞 Soporte

- 📧 **Email**: soporte@template-pro.com
- 💬 **Discord**: [Servidor de la comunidad]
- 📖 **Docs**: [Documentación completa]
- 🎥 **Videos**: [Canal de YouTube]

---

**🎉 ¡Gracias por usar nuestro template! Esperamos ver los increíbles proyectos que construirás con él.**