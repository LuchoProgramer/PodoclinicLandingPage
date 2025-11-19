"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { TemplateConfig, MEDICAL_TEMPLATE_CONFIG, BUSINESS_TEMPLATE_CONFIG, CREATIVE_TEMPLATE_CONFIG } from '@/config/template.config';

// Intentar cargar configuración del cliente si existe
let CLIENT_CONFIG: TemplateConfig;
try {
    CLIENT_CONFIG = require('@/config/client.config').default;
} catch {
    CLIENT_CONFIG = MEDICAL_TEMPLATE_CONFIG; // Fallback
}

interface TemplateContextType {
    config: TemplateConfig;
    setConfig: (config: TemplateConfig) => void;
    switchTheme: (industry: 'medical' | 'business' | 'creative') => void;
    updateColors: (colors: { primary: string; secondary: string; accent: string }) => void;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export function TemplateProvider({ children }: { children: React.ReactNode }) {
    const [config, setConfigState] = useState<TemplateConfig>(CLIENT_CONFIG);

    // Aplicar tema CSS cuando cambie la configuración
    useEffect(() => {
        const root = document.documentElement;
        
        // Establecer el atributo data-theme
        root.setAttribute('data-theme', config.branding.theme);
        
        // Actualizar variables CSS
        root.style.setProperty('--primary-color', config.branding.primaryColor);
        root.style.setProperty('--secondary-color', config.branding.secondaryColor);
        root.style.setProperty('--accent-color', config.branding.accentColor);
        
        // Actualizar título del documento
        document.title = config.seo.defaultTitle;
        
        // Actualizar meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', config.seo.defaultDescription);
        }
    }, [config]);

    const setConfig = (newConfig: TemplateConfig) => {
        setConfigState(newConfig);
        
        // Guardar en localStorage para persistencia
        localStorage.setItem('template-config', JSON.stringify(newConfig));
    };

    const switchTheme = (industry: 'medical' | 'business' | 'creative') => {
        let newConfig: TemplateConfig;
        
        switch (industry) {
            case 'business':
                newConfig = BUSINESS_TEMPLATE_CONFIG;
                break;
            case 'creative':
                newConfig = CREATIVE_TEMPLATE_CONFIG;
                break;
            default:
                newConfig = MEDICAL_TEMPLATE_CONFIG;
        }
        
        setConfig(newConfig);
    };

    const updateColors = (colors: { primary: string; secondary: string; accent: string }) => {
        const updatedConfig = {
            ...config,
            branding: {
                ...config.branding,
                primaryColor: colors.primary,
                secondaryColor: colors.secondary,
                accentColor: colors.accent
            }
        };
        
        setConfig(updatedConfig);
    };

    // Cargar configuración desde localStorage al inicio
    useEffect(() => {
        const savedConfig = localStorage.getItem('template-config');
        if (savedConfig) {
            try {
                const parsedConfig = JSON.parse(savedConfig);
                setConfigState(parsedConfig);
            } catch (error) {
                console.warn('Error loading saved config:', error);
            }
        }
    }, []);

    return (
        <TemplateContext.Provider value={{
            config,
            setConfig,
            switchTheme,
            updateColors
        }}>
            {children}
        </TemplateContext.Provider>
    );
}

export function useTemplate() {
    const context = useContext(TemplateContext);
    if (context === undefined) {
        throw new Error('useTemplate must be used within a TemplateProvider');
    }
    return context;
}

// Hook para obtener solo la configuración (sin las funciones de actualización)
export function useTemplateConfig() {
    const { config } = useTemplate();
    return config;
}