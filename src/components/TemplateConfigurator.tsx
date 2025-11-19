"use client";

import { useState } from 'react';
import { Settings, Palette, Type, Layout, Save, Download, Eye } from 'lucide-react';

interface ConfiguratorProps {
    onConfigChange?: (config: any) => void;
}

export default function TemplateConfigurator({ onConfigChange }: ConfiguratorProps) {
    const [activeTab, setActiveTab] = useState('business');
    const [config, setConfig] = useState({
        business: {
            name: 'Mi Empresa',
            tagline: 'Especialistas en Excelencia',
            industry: 'medical'
        },
        branding: {
            primaryColor: '#60BEC3',
            secondaryColor: '#059669',
            accentColor: '#0891b2'
        },
        contact: {
            phone: '+1234567890',
            email: 'info@miempresa.com',
            city: 'Mi Ciudad'
        }
    });

    const themes = {
        medical: {
            name: 'Médico/Salud',
            colors: { primary: '#60BEC3', secondary: '#059669', accent: '#0891b2' }
        },
        business: {
            name: 'Empresarial',
            colors: { primary: '#3730a3', secondary: '#1e40af', accent: '#059669' }
        },
        creative: {
            name: 'Creativo',
            colors: { primary: '#c026d3', secondary: '#a21caf', accent: '#ea580c' }
        },
        local: {
            name: 'Servicios Locales',
            colors: { primary: '#f97316', secondary: '#ea580c', accent: '#059669' }
        }
    };

    const handleThemeChange = (theme: string) => {
        const themeColors = themes[theme as keyof typeof themes].colors;
        const newConfig = {
            ...config,
            business: { ...config.business, industry: theme },
            branding: { ...config.branding, ...themeColors }
        };
        setConfig(newConfig);
        onConfigChange?.(newConfig);
    };

    const handleInputChange = (section: string, field: string, value: string) => {
        const newConfig = {
            ...config,
            [section]: { ...config[section as keyof typeof config], [field]: value }
        };
        setConfig(newConfig);
        onConfigChange?.(newConfig);
    };

    const handleColorChange = (colorType: string, value: string) => {
        const newConfig = {
            ...config,
            branding: { ...config.branding, [`${colorType}Color`]: value }
        };
        setConfig(newConfig);
        onConfigChange?.(newConfig);
    };

    const exportConfig = () => {
        const configString = JSON.stringify(config, null, 2);
        const blob = new Blob([configString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'template-config.json';
        a.click();
    };

    const tabs = [
        { id: 'business', label: 'Empresa', icon: Layout },
        { id: 'branding', label: 'Colores', icon: Palette },
        { id: 'contact', label: 'Contacto', icon: Type }
    ];

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-96 max-h-96 overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Settings className="w-5 h-5 text-gray-600 mr-2" />
                            <h3 className="text-sm font-semibold text-gray-800">Configurador Template</h3>
                        </div>
                        <div className="flex space-x-1">
                            <button
                                onClick={exportConfig}
                                className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded"
                                title="Exportar configuración"
                            >
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 px-3 py-2 text-xs font-medium transition-colors ${
                                activeTab === tab.id
                                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <tab.icon className="w-3 h-3 inline mr-1" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-4 max-h-64 overflow-y-auto">
                    {activeTab === 'business' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Nombre Empresa
                                </label>
                                <input
                                    type="text"
                                    value={config.business.name}
                                    onChange={(e) => handleInputChange('business', 'name', e.target.value)}
                                    className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Tagline
                                </label>
                                <input
                                    type="text"
                                    value={config.business.tagline}
                                    onChange={(e) => handleInputChange('business', 'tagline', e.target.value)}
                                    className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-2">
                                    Tema/Industria
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(themes).map(([key, theme]) => (
                                        <button
                                            key={key}
                                            onClick={() => handleThemeChange(key)}
                                            className={`p-2 text-xs rounded border-2 transition-colors ${
                                                config.business.industry === key
                                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                    : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        >
                                            <div
                                                className="w-4 h-4 rounded-full mx-auto mb-1"
                                                style={{ backgroundColor: theme.colors.primary }}
                                            />
                                            {theme.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'branding' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Color Primario
                                </label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="color"
                                        value={config.branding.primaryColor}
                                        onChange={(e) => handleColorChange('primary', e.target.value)}
                                        className="w-8 h-8 border border-gray-300 rounded"
                                    />
                                    <input
                                        type="text"
                                        value={config.branding.primaryColor}
                                        onChange={(e) => handleColorChange('primary', e.target.value)}
                                        className="flex-1 px-2 py-1 text-xs font-mono border border-gray-300 rounded"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Color Secundario
                                </label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="color"
                                        value={config.branding.secondaryColor}
                                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                                        className="w-8 h-8 border border-gray-300 rounded"
                                    />
                                    <input
                                        type="text"
                                        value={config.branding.secondaryColor}
                                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                                        className="flex-1 px-2 py-1 text-xs font-mono border border-gray-300 rounded"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Color de Acento
                                </label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="color"
                                        value={config.branding.accentColor}
                                        onChange={(e) => handleColorChange('accent', e.target.value)}
                                        className="w-8 h-8 border border-gray-300 rounded"
                                    />
                                    <input
                                        type="text"
                                        value={config.branding.accentColor}
                                        onChange={(e) => handleColorChange('accent', e.target.value)}
                                        className="flex-1 px-2 py-1 text-xs font-mono border border-gray-300 rounded"
                                    />
                                </div>
                            </div>

                            {/* Preview */}
                            <div className="mt-4 p-3 bg-gray-50 rounded">
                                <p className="text-xs font-medium text-gray-700 mb-2">Vista Previa</p>
                                <div className="flex space-x-1">
                                    <div
                                        className="w-6 h-6 rounded"
                                        style={{ backgroundColor: config.branding.primaryColor }}
                                        title="Primario"
                                    />
                                    <div
                                        className="w-6 h-6 rounded"
                                        style={{ backgroundColor: config.branding.secondaryColor }}
                                        title="Secundario"
                                    />
                                    <div
                                        className="w-6 h-6 rounded"
                                        style={{ backgroundColor: config.branding.accentColor }}
                                        title="Acento"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'contact' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Teléfono
                                </label>
                                <input
                                    type="text"
                                    value={config.contact.phone}
                                    onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
                                    className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={config.contact.email}
                                    onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                                    className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">
                                    Ciudad
                                </label>
                                <input
                                    type="text"
                                    value={config.contact.city}
                                    onChange={(e) => handleInputChange('contact', 'city', e.target.value)}
                                    className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Preview Button */}
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                        <Eye className="w-3 h-3 mr-1" />
                        Aplicar y Ver Cambios
                    </button>
                </div>
            </div>
        </div>
    );
}