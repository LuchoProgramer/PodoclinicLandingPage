import { useState } from "react";
import { Gift, Download, CheckCircle, Phone } from "lucide-react";

interface LeadMagnetProps {
  variant?: "quiz" | "guide" | "assessment";
  title: string;
  description: string;
  ctaText: string;
}

export default function LeadMagnet({ 
  variant = "guide", 
  title, 
  description, 
  ctaText 
}: LeadMagnetProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Analytics tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "lead_generation", {
        event_category: "conversion",
        event_label: `Lead Magnet ${variant}`
      });
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      // Redirect to WhatsApp with pre-filled message
      const message = `¡Hola! Completé el formulario de "${title}" y me gustaría información sobre consulta. Email: ${email}, Tel: ${phone}`;
      window.open(`https://wa.me/593995832788?text=${encodeURIComponent(message)}`, '_blank');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">¡Perfecto!</h3>
        <p className="text-green-700 mb-4">
          Tu información fue recibida. Te contactaremos en WhatsApp para coordinar tu consulta especializada.
        </p>
        <div className="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center font-semibold">
          <Phone className="w-5 h-5 mr-2" />
          Coordinando tu cita...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8 shadow-xl">
      {/* Header with urgency */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
          <Gift className="w-4 h-4 mr-2" />
          INFORMACIÓN ESPECIALIZADA
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-lg">{description}</p>
      </div>

      {/* Progressive form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {currentStep === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Tu Email (para enviarte el resultado)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-lg"
                placeholder="ejemplo@gmail.com"
                required
              />
            </div>
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              disabled={!email}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              Continuar ➤
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Tu WhatsApp (para coordinar tu consulta)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-lg"
                placeholder="0995832788"
                required
              />
            </div>
            <button
              type="submit"
              disabled={!phone}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              {ctaText}
            </button>
          </div>
        )}
      </form>

      {/* Trust indicators */}
      <div className="mt-6 text-center">
        <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
            Información confiable
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
            Sin Spam
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
            Atención personalizada
          </div>
        </div>
      </div>
    </div>
  );
}