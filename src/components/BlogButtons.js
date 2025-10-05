"use client";

export function WhatsAppButton({ 
  href, 
  children, 
  className = "", 
  trackingLabel = "whatsapp_click" 
}) {
  const handleClick = () => {
    // Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        event_category: "engagement",
        event_label: trackingLabel
      });
    }

    // Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_category: "blog",
        content_name: trackingLabel
      });
    }

    // TikTok Pixel
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.track("Contact", {
        content_category: "blog"
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export function CTAButton({ 
  href, 
  children, 
  className = "", 
  trackingLabel = "cta_click",
  isExternal = false 
}) {
  const handleClick = () => {
    // Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_cta", {
        event_category: "blog_engagement",
        event_label: trackingLabel
      });
    }

    // Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_category: "blog",
        content_name: trackingLabel
      });
    }

    // TikTok Pixel
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.track("Contact", {
        content_category: "blog"
      });
    }
  };

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}