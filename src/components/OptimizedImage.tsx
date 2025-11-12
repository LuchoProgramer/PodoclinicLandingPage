import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  geoKeywords?: string[]; // Keywords geográficas adicionales
  serviceKeywords?: string[]; // Keywords de servicios
}

export default function OptimizedImage({
  src,
  alt,
  width = 400,
  height = 300,
  className = "",
  priority = false,
  geoKeywords = [],
  serviceKeywords = []
}: OptimizedImageProps) {
  
  // Construir alt text optimizado para SEO
  const buildSEOAlt = (baseAlt: string): string => {
    const geoTerms = geoKeywords.length > 0 ? geoKeywords.join(' ') : 'Quito Norte';
    const serviceTerms = serviceKeywords.length > 0 
      ? serviceKeywords.join(' ') 
      : 'podólogo especialista';
    
    // Si el alt ya incluye keywords, no duplicar
    const hasGeo = geoKeywords.some(keyword => 
      baseAlt.toLowerCase().includes(keyword.toLowerCase())
    );
    const hasService = serviceKeywords.some(keyword => 
      baseAlt.toLowerCase().includes(keyword.toLowerCase())
    );
    
    let optimizedAlt = baseAlt;
    
    if (!hasGeo && !hasService) {
      optimizedAlt = `${baseAlt} ${geoTerms} ${serviceTerms}`;
    } else if (!hasGeo) {
      optimizedAlt = `${baseAlt} ${geoTerms}`;
    } else if (!hasService) {
      optimizedAlt = `${baseAlt} ${serviceTerms}`;
    }
    
    return optimizedAlt.trim();
  };

  const optimizedAlt = buildSEOAlt(alt);

  return (
    <Image
      src={src}
      alt={optimizedAlt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  );
}

// Presets para diferentes tipos de imágenes
export const ImagePresets = {
  doctorProfile: {
    geoKeywords: ['Quito Norte', 'La Florida'],
    serviceKeywords: ['podóloga especialista', 'uñeros', 'pie diabético']
  },
  
  clinicLogo: {
    geoKeywords: ['Quito Norte'],
    serviceKeywords: ['podólogo especialista', 'uñeros']
  },
  
  serviceImage: {
    geoKeywords: ['Quito Norte'],
    serviceKeywords: ['tratamiento profesional', 'especialista']
  },
  
  treatmentBefore: {
    geoKeywords: ['Quito Norte'],
    serviceKeywords: ['antes tratamiento', 'uñero', 'especialista']
  },
  
  treatmentAfter: {
    geoKeywords: ['Quito Norte'],
    serviceKeywords: ['después tratamiento', 'resultado', 'curado']
  },
  
  facilityImage: {
    geoKeywords: ['Quito Norte', 'La Florida', 'Manuel Jordan'],
    serviceKeywords: ['clínica podológica', 'consultorio', 'esterilizado']
  }
};

// Componente específico para imágenes de podóloga
export function DoctorImage({ className = "", priority = false }: { className?: string, priority?: boolean }) {
  return (
    <OptimizedImage
      src="/images/doctora-cristina.jpg"
      alt="Cristina Muñoz - Podóloga"
      width={400}
      height={400}
      className={className}
      priority={priority}
      {...ImagePresets.doctorProfile}
    />
  );
}

// Componente específico para logo
export function ClinicLogo({ className = "", size = 200 }: { className?: string, size?: number }) {
  return (
    <OptimizedImage
      src="https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png"
      alt="PodoClinic"
      width={size}
      height={size}
      className={className}
      priority={true}
      {...ImagePresets.clinicLogo}
    />
  );
}

// Componente para imágenes de tratamientos
export function TreatmentImage({ 
  type, 
  service, 
  className = "",
  beforeAfter = 'none' 
}: { 
  type: string,
  service: string,
  className?: string,
  beforeAfter?: 'before' | 'after' | 'none'
}) {
  const getAlt = () => {
    if (beforeAfter === 'before') {
      return `Antes del tratamiento ${service}`;
    } else if (beforeAfter === 'after') {
      return `Después del tratamiento ${service} - resultado exitoso`;
    }
    return `Tratamiento ${service}`;
  };

  const preset = beforeAfter === 'before' 
    ? ImagePresets.treatmentBefore 
    : beforeAfter === 'after' 
    ? ImagePresets.treatmentAfter 
    : ImagePresets.serviceImage;

  return (
    <OptimizedImage
      src={`/images/treatments/${type}.jpg`}
      alt={getAlt()}
      width={300}
      height={200}
      className={className}
      {...preset}
    />
  );
}