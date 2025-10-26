// src/data/faqs.ts - TypeScript version
import { FAQ } from "@/types";

const faqs: FAQ[] = [
  {
    id: "estacionamiento-disponible",
    question: "¿Tienen estacionamiento disponible?",
    answer: "No contamos con estacionamiento propio, pero hay varios lugares disponibles para parquear en las cercanías. Además, nuestra ubicación es céntrica, lo que facilita el acceso al establecimiento.",
    category: "general"
  },
  {
    id: "pedicure-diabetica",
    question: "¿Puedo asistir al pedicure si soy diabética?",
    answer: "No se recomienda asistir a un pedicure convencional si eres diabética. Es importante que acudas a un podólogo especializado, quien podrá brindarte un tratamiento adecuado y seguro para el cuidado de tus pies, ya que las personas con diabetes tienen un mayor riesgo de complicaciones en la piel y las uñas.",
    category: "pie-diabetico"
  },
  {
    id: "por-que-se-forman-uneros",
    question: "¿Por qué se forman los uñeros?",
    answer: "Los uñeros pueden ser causados por varios factores. La mala utilización del calzado, como el uso de zapatos demasiado ajustados o de tacón alto, puede ejercer presión sobre las uñas y provocar su encarnación. Además, un corte incorrecto de las uñas, como cortarlas demasiado cortas o de manera desigual, también puede favorecer la aparición de uñeros. Por último, los factores genéticos juegan un papel importante, ya que algunas personas pueden ser más propensas a desarrollar esta condición debido a la forma natural de sus uñas.",
    category: "uneros"
  },
  {
    id: "tiempo-curacion-hongos",
    question: "¿Cuánto tiempo tarda en curarse un hongo de la uña?",
    answer: "El tiempo de curación de un hongo en la uña depende de varios factores, como el tipo de hongo, la gravedad de la infección y la frecuencia de las visitas al podólogo. Generalmente, el tratamiento puede durar entre varias semanas y meses. Es importante seguir las indicaciones del podólogo al pie de la letra, incluyendo el uso de medicamentos o tratamientos tópicos recomendados. Si un paciente no sigue las recomendaciones, como la aplicación de cremas o soluciones, el proceso de curación puede retrasarse significativamente o no ser efectivo. Para obtener los mejores resultados, es fundamental la constancia y el compromiso con el tratamiento prescrito.",
    category: "hongos"
  },
  {
    id: "plantillas-personalizadas",
    question: "¿Realizan plantillas personalizadas?",
    answer: "En nuestra clínica no ofrecemos el servicio de plantillas personalizadas. Sin embargo, recomendamos a nuestros aliados expertos en ortopedia, quienes pueden brindarte una evaluación detallada y ofrecerte plantillas adaptadas a tus necesidades específicas. Estaremos encantados de orientarte para que recibas el mejor tratamiento posible.",
    category: "servicios"
  },
  {
    id: "calzado-recomendado",
    question: "¿Qué tipo de calzado recomiendan para cuidar la salud podológica?",
    answer: "Recomendamos calzado cómodo, con buen soporte y que se ajuste correctamente a tu pie. Para los deportistas, es esencial elegir zapatos específicos para cada actividad, que brinden estabilidad y amortiguación. Para pacientes con problemas podológicos, como pies diabéticos o con juanetes, es importante optar por calzado ortopédico o diseñado para aliviar la presión. En general, evita el calzado apretado o de tacón alto, y asegúrate de que los zapatos permitan que tus pies respiren y se mantengan secos.",
    category: "prevencion"
  },
  {
    id: "atencion-domingos",
    question: "¿Atienden los Domingos?",
    answer: "Atendemos con cita previa de 08:00 a 12:00. Los domingos no ofrecemos servicio a domicilio.",
    category: "horarios"
  },
  {
    id: "horarios-disponibles",
    question: "¿Qué días y horarios están disponibles?",
    answer: "Estamos abiertos de lunes a viernes, de 8:00 a 18:00, y los sábados de 10:00 a 17:00. Consulta por atención a domicilio.",
    category: "horarios"
  },
  {
    id: "problemas-podologicos-tratados",
    question: "¿Qué problemas podológicos tratan en la clínica?",
    answer: "Somos especialistas en uñas encarnadas, verrugas plantares, callos, ampollas y lesiones deportivas en los pies. Además de servicios preventivos para pacientes diabéticos",
    category: "servicios"
  },
  {
    id: "atencion-deportistas",
    question: "¿Atienden a deportistas o personas activas?",
    answer: "Sí, ofrecemos servicios podológicos para corredores, ciclistas y deportistas que necesitan prevenir o tratar lesiones en los pies.",
    category: "deportiva"
  },
  {
    id: "tratamiento-unas-encarnadas",
    question: "¿Realizan tratamientos para uñas encarnadas?",
    answer: "Claro, somos expertos en tratar uñas encarnadas con procedimientos efectivos",
    category: "uneros"
  },
  {
    id: "atencion-domicilio",
    question: "¿Atienden a domicilio?",
    answer: "Sí, contamos con servicio a domicilio para pacientes que lo necesiten, con la misma calidad y esterilización que en la clínica.",
    category: "servicios"
  },
  {
    id: "experiencia-diabeticos",
    question: "¿Tienen experiencia con pacientes diabéticos?",
    answer: "Sí, brindamos cuidado preventivo y tratamiento especializado para pacientes diabéticos.",
    category: "pie-diabetico"
  },
  {
    id: "prevencion-verrugas-deporte",
    question: "¿Cómo puedo prevenir verrugas plantares si hago deporte?",
    answer: "Usa sandalias en vestuarios o duchas públicas y asegúrate de secar bien tus pies después de entrenar. Además, evita usar calzado que no sea tuyo para prevenir infecciones y problemas en la piel.",
    category: "prevencion"
  },
  {
    id: "medidas-higiene",
    question: "¿Qué medidas de higiene tienen en los tratamientos?",
    answer: "Todos nuestros instrumentos son esterilizados y trabajamos en un ambiente totalmente higiénico para garantizar tu seguridad.",
    category: "seguridad"
  },
  {
    id: "cita-previa",
    question: "¿Necesito una cita previa para ser atendido?",
    answer: "Recomendamos agendar una cita por WhatsApp o llamada para garantizar tu atención sin esperas.",
    category: "citas"
  }
];

// Utility functions
export function getAllFAQs(): FAQ[] {
  return faqs;
}

export function getFAQsByCategory(category?: string): FAQ[] {
  if (!category) return faqs;
  return faqs.filter(faq => faq.category === category);
}

export function getFAQCategories(): string[] {
  const categorySet = new Set(faqs.map(faq => faq.category).filter(Boolean));
  return Array.from(categorySet);
}

export default faqs;