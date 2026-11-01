"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { company, phones } from "@/lib/site-data";

/**
 * Floating quick-contact buttons: WhatsApp + call.
 * Appears after the user scrolls a little.
 */
export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 z-40 flex flex-col gap-3 transition-all duration-300 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {/* Call */}
      <a
        href={`tel:${phones[0].raw}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition-transform hover:scale-110 sm:h-13 sm:w-13"
        aria-label="Call Divine Vine-Edo Global Resources Ltd"
      >
        <Phone className="h-5 w-5" />
      </a>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${company.whatsappPrimary}?text=${encodeURIComponent(
          "Hello Divine Vine-Edo, I visited your website and I am interested in your services."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
          <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-background bg-[#25D366]" />
        </span>
      </a>
    </div>
  );
}