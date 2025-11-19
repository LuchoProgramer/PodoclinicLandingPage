/**
 * Web Vitals monitoring y reporting para SEO optimization
 * Monitorea Core Web Vitals y reporta métricas para optimización SEO
 */

'use client';

import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

class WebVitalsMonitor {
  private metrics: Map<string, WebVitalMetric> = new Map();
  private isProduction: boolean;

  constructor() {
    this.isProduction = process.env.NODE_ENV === 'production';
    this.initializeMonitoring();
  }

  private initializeMonitoring() {
    if (typeof window === 'undefined') return;

    // Monitorear todas las métricas Core Web Vitals
    onCLS(this.handleMetric.bind(this));
    onFID(this.handleMetric.bind(this));
    onFCP(this.handleMetric.bind(this));
    onLCP(this.handleMetric.bind(this));
    onTTFB(this.handleMetric.bind(this));
  }

  private handleMetric(metric: WebVitalMetric) {
    this.metrics.set(metric.name, metric);
    
    // Log en desarrollo
    if (!this.isProduction) {
      console.log(`📊 ${metric.name}: ${metric.value} (${metric.rating})`);
    }

    // Reportar métricas en producción
    if (this.isProduction) {
      this.reportMetric(metric);
    }

    // Alertas para métricas críticas
    this.checkCriticalMetrics(metric);
  }

  private reportMetric(metric: WebVitalMetric) {
    // Reportar a Google Analytics si está disponible
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Reportar a servicio de monitoreo personalizado
    this.sendToMonitoringService(metric);
  }

  private async sendToMonitoringService(metric: WebVitalMetric) {
    try {
      // Solo en producción y con consentimiento
      if (!this.isProduction) return;

      const data = {
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
        url: window.location.pathname,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
        connection: (navigator as any).connection?.effectiveType || 'unknown'
      };

      // Enviar al endpoint de métricas (implementar según necesidades)
      fetch('/api/metrics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        keepalive: true
      }).catch(() => {
        // Fallar silenciosamente
      });
    } catch (error) {
      // No mostrar errores al usuario
    }
  }

  private checkCriticalMetrics(metric: WebVitalMetric) {
    const thresholds = {
      LCP: 2.5,   // segundos
      FID: 100,   // milisegundos
      CLS: 0.1,   // score
      FCP: 1.8,   // segundos
      TTFB: 600   // milisegundos
    };

    const threshold = thresholds[metric.name as keyof typeof thresholds];
    if (threshold && metric.value > threshold) {
      console.warn(`⚠️ SEO Alert: ${metric.name} (${metric.value}) exceeds recommended threshold (${threshold})`);
      
      // En producción, reportar problemas críticos
      if (this.isProduction) {
        this.reportCriticalIssue(metric, threshold);
      }
    }
  }

  private reportCriticalIssue(metric: WebVitalMetric, threshold: number) {
    // Reportar problema crítico que afecta SEO
    const issue = {
      type: 'performance',
      metric: metric.name,
      value: metric.value,
      threshold,
      severity: 'high',
      impact: 'SEO ranking may be affected',
      url: window.location.pathname,
      timestamp: new Date().toISOString()
    };

    // Enviar alerta (implementar según necesidades)
    fetch('/api/alerts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(issue)
    }).catch(() => {});
  }

  // Método público para obtener métricas actuales
  public getMetrics(): Map<string, WebVitalMetric> {
    return new Map(this.metrics);
  }

  // Método para obtener score de rendimiento general
  public getPerformanceScore(): number {
    const metrics = Array.from(this.metrics.values());
    if (metrics.length === 0) return 0;

    const goodCount = metrics.filter(m => m.rating === 'good').length;
    return Math.round((goodCount / metrics.length) * 100);
  }

  // Método para obtener recomendaciones de optimización
  public getOptimizationRecommendations(): string[] {
    const recommendations: string[] = [];
    
    this.metrics.forEach((metric, name) => {
      if (metric.rating === 'poor') {
        switch (name) {
          case 'LCP':
            recommendations.push('Optimizar imágenes y recursos críticos para mejorar LCP');
            break;
          case 'FID':
            recommendations.push('Reducir JavaScript bloqueante para mejorar FID');
            break;
          case 'CLS':
            recommendations.push('Especificar dimensiones de imágenes para reducir CLS');
            break;
          case 'FCP':
            recommendations.push('Optimizar CSS crítico para mejorar FCP');
            break;
          case 'TTFB':
            recommendations.push('Optimizar servidor y caché para mejorar TTFB');
            break;
        }
      }
    });

    return recommendations;
  }
}

// Instancia global del monitor
let webVitalsMonitor: WebVitalsMonitor | null = null;

export function initializeWebVitalsMonitor() {
  if (typeof window !== 'undefined' && !webVitalsMonitor) {
    webVitalsMonitor = new WebVitalsMonitor();
  }
  return webVitalsMonitor;
}

export function getWebVitalsMonitor() {
  return webVitalsMonitor;
}

// Hook personalizado para React
export function useWebVitals() {
  const monitor = getWebVitalsMonitor();
  
  return {
    metrics: monitor?.getMetrics() || new Map(),
    score: monitor?.getPerformanceScore() || 0,
    recommendations: monitor?.getOptimizationRecommendations() || []
  };
}

export default WebVitalsMonitor;