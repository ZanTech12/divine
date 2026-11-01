
"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "zoom"
  | "fade"
  | "blur";

const HIDDEN: Record<RevealVariant, string> = {
  up: "opacity-0 translate-y-10",
  down: "opacity-0 -translate-y-10",
  left: "opacity-0 -translate-x-12",
  right: "opacity-0 translate-x-12",
  zoom: "opacity-0 scale-[0.86]",
  fade: "opacity-0",
  blur: "opacity-0 translate-y-6 blur-md",
};

const SHOWN =
  "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0";

export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  duration = 700,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Always display content on mobile devices.
    // This prevents mobile browsers from leaving content invisible
    // when IntersectionObserver fails to trigger.
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    if (
      mobileQuery.matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    // Browser compatibility fallback.
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);

            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setShown(false);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  const style: CSSProperties = {
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: shown ? "auto" : "opacity, transform",
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`${shown ? SHOWN : HIDDEN[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
