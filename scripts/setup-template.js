#!/usr/bin/env node

/**
 * 🚀 Template Setup Script
 * Script interactivo para configurar el template con datos del cliente
 * Tiempo estimado: 5-10 minutos
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Colores para la consola
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para hacer preguntas
const question = (prompt) => {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
};

// Banner de bienvenida
function showBanner() {
    console.log(colors.cyan + colors.bright);
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║                    🚀 TEMPLATE SETUP WIZARD                  ║');
    console.log('║                                                              ║');
    console.log('║     Configuración automática del template profesional       ║');
    console.log('║     Tiempo estimado: 5-10 minutos                          ║');
    console.log('╚══════════════════════════════════════════════════════════════╝');
    console.log(colors.reset);
}

// Configuración por industria
const industryTemplates = {
    medical: {
        name: 'Medical/Healthcare',
        description: 'Para clínicas, doctores, centros médicos',
        colors: {
            primary: '#60BEC3',
            secondary: '#059669',
            accent: '#0891b2'
        },
        services: [
            { id: 'consultas', title: 'Consultas Médicas', icon: '🩺' },
            { id: 'tratamientos', title: 'Tratamientos', icon: '💊' },
            { id: 'diagnosticos', title: 'Diagnósticos', icon: '🔬' }
        ]
    },
    business: {
        name: 'Business/Corporate',
        description: 'Para empresas, consultoras, servicios B2B',
        colors: {
            primary: '#3730a3',
            secondary: '#1e40af',
            accent: '#059669'
        },
        services: [
            { id: 'consultoria', title: 'Consultoría Estratégica', icon: '🎯' },
            { id: 'tecnologia', title: 'Soluciones Tecnológicas', icon: '💻' },
            { id: 'capacitacion', title: 'Capacitación', icon: '📚' }
        ]
    },
    creative: {
        name: 'Creative/Design',
        description: 'Para diseñadores, creativos, agencias',
        colors: {
            primary: '#c026d3',
            secondary: '#a21caf',
            accent: '#ea580c'
        },
        services: [
            { id: 'branding', title: 'Branding', icon: '🎨' },
            { id: 'web-design', title: 'Diseño Web', icon: '💻' },
            { id: 'marketing', title: 'Marketing Digital', icon: '📱' }
        ]
    },
    local: {
        name: 'Local Services',
        description: 'Para servicios locales, restaurantes, comercios',
        colors: {
            primary: '#f97316',
            secondary: '#ea580c',
            accent: '#059669'
        },
        services: [
            { id: 'servicio1', title: 'Servicio Principal', icon: '⭐' },
            { id: 'servicio2', title: 'Servicio Secundario', icon: '🛠️' },
            { id: 'servicio3', title: 'Servicio Adicional', icon: '📞' }
        ]
    }
};

// Función principal de setup
async function setupTemplate() {
    try {
        showBanner();
        
        console.log(colors.yellow + '📋 Iniciemos la configuración de tu template...\n' + colors.reset);

        // 1. Información básica de la empresa
        console.log(colors.bright + '1️⃣  INFORMACIÓN BÁSICA DE LA EMPRESA' + colors.reset);
        const businessName = await question('🏢 Nombre de la empresa: ');
        const businessTagline = await question('📝 Tagline/Eslogan: ');
        const businessDescription = await question('📄 Descripción breve (1-2 líneas): ');

        // 2. Seleccionar industria
        console.log(colors.bright + '\n2️⃣  SELECCIONAR INDUSTRIA' + colors.reset);
        console.log('Selecciona el tipo de negocio:');
        Object.keys(industryTemplates).forEach((key, index) => {
            const template = industryTemplates[key];
            console.log(`${index + 1}. ${template.name} - ${template.description}`);
        });

        const industryChoice = await question('\nElige una opción (1-4): ');
        const industryKeys = Object.keys(industryTemplates);
        const selectedIndustry = industryKeys[parseInt(industryChoice) - 1] || 'business';
        const industryTemplate = industryTemplates[selectedIndustry];

        console.log(colors.green + `✅ Seleccionado: ${industryTemplate.name}` + colors.reset);

        // 3. Información de contacto
        console.log(colors.bright + '\n3️⃣  INFORMACIÓN DE CONTACTO' + colors.reset);
        const phone = await question('📞 Teléfono: ');
        const email = await question('📧 Email: ');
        const whatsapp = await question('💬 WhatsApp (solo números): ');
        const address = await question('📍 Dirección: ');
        const city = await question('🏙️  Ciudad: ');
        const country = await question('🌍 País: ');

        // 4. Horarios
        console.log(colors.bright + '\n4️⃣  HORARIOS DE ATENCIÓN' + colors.reset);
        const weekdaysHours = await question('🕒 Horarios entre semana (ej: Lun-Vie 9:00-18:00): ');
        const saturdayHours = await question('🕒 Horarios sábado (opcional): ');

        // 5. Personalizar colores (opcional)
        console.log(colors.bright + '\n5️⃣  COLORES (OPCIONAL)' + colors.reset);
        console.log(`Colores por defecto para ${industryTemplate.name}:`);
        console.log(`Primary: ${industryTemplate.colors.primary}`);
        console.log(`Secondary: ${industryTemplate.colors.secondary}`);
        
        const customizeColors = await question('¿Quieres personalizar los colores? (s/N): ');
        let colors = industryTemplate.colors;
        
        if (customizeColors.toLowerCase() === 's' || customizeColors.toLowerCase() === 'si') {
            colors.primary = await question('Color primario (hex, ej: #60BEC3): ') || colors.primary;
            colors.secondary = await question('Color secundario (hex): ') || colors.secondary;
            colors.accent = await question('Color de acento (hex): ') || colors.accent;
        }

        // 6. Servicios
        console.log(colors.bright + '\n6️⃣  SERVICIOS' + colors.reset);
        console.log('Configura tus servicios principales (mínimo 3):');
        
        const services = [];
        const defaultServices = industryTemplate.services;
        
        for (let i = 0; i < 3; i++) {
            console.log(`\nServicio ${i + 1}:`);
            const serviceTitle = await question(`Título (${defaultServices[i]?.title}): `) || defaultServices[i]?.title;
            const serviceDescription = await question('Descripción: ');
            const servicePrice = await question('Precio (opcional): ');
            
            services.push({
                id: serviceTitle.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                title: serviceTitle,
                description: serviceDescription,
                icon: defaultServices[i]?.icon || '⭐',
                features: ['Característica 1', 'Característica 2', 'Característica 3'],
                price: servicePrice || undefined,
                link: `/servicios/${serviceTitle.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
                category: 'general'
            });
        }

        // 7. Generar configuración
        console.log(colors.bright + '\n7️⃣  GENERANDO CONFIGURACIÓN...' + colors.reset);
        
        const config = {
            business: {
                name: businessName,
                tagline: businessTagline,
                description: businessDescription,
                logo: "/logo.png",
                favicon: "/favicon.ico",
                industry: selectedIndustry
            },
            branding: {
                primaryColor: colors.primary,
                secondaryColor: colors.secondary,
                accentColor: colors.accent,
                theme: selectedIndustry,
                fontFamily: "Inter, sans-serif"
            },
            contact: {
                phone: phone,
                email: email,
                whatsapp: whatsapp.replace(/[^\d]/g, ''), // Solo números
                address: {
                    street: address,
                    city: city,
                    country: country
                },
                hours: {
                    weekdays: weekdaysHours,
                    saturday: saturdayHours || undefined
                }
            },
            services: services,
            hero: {
                title: `${businessTagline}`,
                subtitle: businessName,
                description: businessDescription,
                ctaPrimary: {
                    text: selectedIndustry === 'medical' ? 'Reserva tu Cita' : 'Contactar',
                    action: 'modal'
                },
                ctaSecondary: {
                    text: 'Ver Servicios',
                    action: 'services'
                },
                badges: [
                    '⭐ Calidad Garantizada',
                    '🏆 Profesionales Certificados',
                    '📞 Atención Personalizada'
                ],
                quickLinks: services.slice(0, 3).map(service => ({
                    title: service.title,
                    emoji: service.icon,
                    link: service.link,
                    description: 'Disponible'
                }))
            },
            seo: {
                siteName: businessName,
                siteUrl: `https://${businessName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
                defaultTitle: `${businessName} - ${businessTagline} | ${city}`,
                defaultDescription: `${businessDescription} Contacto: ${phone}`,
                keywords: [businessName.toLowerCase(), businessTagline.toLowerCase(), city.toLowerCase()],
                socialImage: "/social-image.jpg"
            },
            features: {
                blog: true,
                testimonials: true,
                faq: true,
                quiz: selectedIndustry === 'medical',
                locationHub: true,
                appointments: true,
                multiLanguage: false
            }
        };

        // 8. Guardar configuración
        const configPath = path.join(__dirname, '../config/client.config.ts');
        const configContent = `// 🎯 Configuración generada automáticamente
// Generado el: ${new Date().toISOString()}

import { TemplateConfig } from './template.config';

export const CLIENT_CONFIG: TemplateConfig = ${JSON.stringify(config, null, 2)};

export default CLIENT_CONFIG;
`;

        fs.writeFileSync(configPath, configContent);

        // 9. Crear archivo .env.local
        const envContent = `# Configuración generada por Template Setup
# ${new Date().toISOString()}

# Información básica
NEXT_PUBLIC_SITE_NAME="${businessName}"
NEXT_PUBLIC_SITE_URL="${config.seo.siteUrl}"

# Colores
NEXT_PUBLIC_PRIMARY_COLOR="${colors.primary}"
NEXT_PUBLIC_SECONDARY_COLOR="${colors.secondary}"
NEXT_PUBLIC_ACCENT_COLOR="${colors.accent}"

# Contacto
NEXT_PUBLIC_PHONE="${phone}"
NEXT_PUBLIC_EMAIL="${email}"
NEXT_PUBLIC_WHATSAPP="${whatsapp.replace(/[^\d]/g, '')}"

# CMS (configurar si es necesario)
# NEXT_PUBLIC_CMS_URL=https://tu-cms.com/api
# NEXT_PUBLIC_CMS_TENANT_ID=tu-tenant-id

# Analytics (configurar cuando esté listo)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXX
`;

        fs.writeFileSync('.env.local', envContent);

        // 10. Éxito
        console.log(colors.green + colors.bright);
        console.log('\n🎉 ¡CONFIGURACIÓN COMPLETADA EXITOSAMENTE!');
        console.log('════════════════════════════════════════════');
        console.log('✅ Configuración guardada en: config/client.config.ts');
        console.log('✅ Variables de entorno: .env.local');
        console.log('✅ Template listo para usar');
        console.log(colors.reset);

        console.log(colors.yellow + '\n📋 PRÓXIMOS PASOS:' + colors.reset);
        console.log('1. npm run dev - Iniciar desarrollo');
        console.log('2. Personalizar imágenes en /public');
        console.log('3. Revisar y ajustar servicios');
        console.log('4. Configurar CMS si es necesario');
        console.log('5. npm run build - Compilar para producción');

        console.log(colors.cyan + '\n🚀 ¡Tu template está listo para brillar!' + colors.reset);

    } catch (error) {
        console.error(colors.red + '❌ Error durante la configuración:', error.message + colors.reset);
        process.exit(1);
    } finally {
        rl.close();
    }
}

// Ejecutar el setup
if (require.main === module) {
    setupTemplate();
}

module.exports = { setupTemplate };