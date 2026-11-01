
"use client";

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* =========================================================
   REVEAL ANIMATION TYPES
========================================================= */

export type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "zoom"
  | "fade"
  | "blur"
  | "rotate"
  | "rotate-left"
  | "rotate-right"
  | "flip"
  | "flip-up"
  | "flip-down"
  | "clip"
  | "clip-up"
  | "clip-down"
  | "clip-left"
  | "clip-right"
  | "split-text"
  | "mask"
  | "light-sweep"
  | "depth"
  | "focus"
  | "circular"
  | "line-draw";

export type SplitBy = "word" | "character";

/* =========================================================
   ANIMATION EASING PRESETS
========================================================= */

export const revealEasing = {
  smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
  premium: "cubic-bezier(0.16, 1, 0.3, 1)",
  elegant: "cubic-bezier(0.19, 1, 0.22, 1)",
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  standard: "ease",
} as const;

export type RevealEasing = keyof typeof revealEasing;

/* =========================================================
   REVEAL PROPS
========================================================= */

interface RevealProps {
  children: ReactNode;
  className?: string;

  variant?: RevealVariant;

  delay?: number;
  duration?: number;

  once?: boolean;

  threshold?: number;
  rootMargin?: string;

  easing?: RevealEasing;

  distance?: number;

  splitBy?: SplitBy;

  scaleFrom?: number;

  glow?: boolean;

  parallax?: number;
}

/* =========================================================
   REVEAL COMPONENT
========================================================= */

export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  duration = 850,
  once = true,
  threshold = 0.12,
  rootMargin = "0px 0px -50px 0px",
  easing = "premium",
  distance = 48,
  splitBy = "word",
  scaleFrom = 0.82,
  glow = false,
  parallax = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const [shown, setShown] = useState(false);

  /* =====================================================
     INTERSECTION OBSERVER
  ===================================================== */

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    let observer: IntersectionObserver | null = null;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const mobileQuery = window.matchMedia(
      "(max-width: 767px)"
    );

    if (reducedMotion.matches || mobileQuery.matches) {
      setShown(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);

            if (once) {
              observer?.unobserve(element);
            }
          } else if (!once) {
            setShown(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer?.disconnect();
    };
  }, [once, threshold, rootMargin]);

  /* =====================================================
     PARALLAX EFFECT
  ===================================================== */

  useEffect(() => {
    if (!parallax || !innerRef.current) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const mobileQuery = window.matchMedia(
      "(max-width: 767px)"
    );

    if (reducedMotion.matches || mobileQuery.matches) return;

    const element = ref.current;
    const inner = innerRef.current;

    if (!element || !inner) return;

    let frame = 0;

    const updateParallax = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();

        const viewportCenter = window.innerHeight / 2;

        const elementCenter = rect.top + rect.height / 2;

        const offset =
          (viewportCenter - elementCenter) * (parallax / 100);

        const limitedOffset = Math.max(
          -60,
          Math.min(60, offset)
        );

        inner.style.transform = `translate3d(0, ${limitedOffset}px, 0)`;
      });
    };

    updateParallax();

    window.addEventListener("scroll", updateParallax, {
      passive: true,
    });

    window.addEventListener("resize", updateParallax);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("scroll", updateParallax);

      window.removeEventListener("resize", updateParallax);
    };
  }, [parallax]);

  /* =====================================================
     ANIMATION STYLE CONFIGURATION
  ===================================================== */

  const getHiddenStyle = (): CSSProperties => {
    const movement = `${distance}px`;

    const base: CSSProperties = {
      opacity: 0,
      transitionProperty: "opacity, transform, filter, clip-path",
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: revealEasing[easing],
      willChange: "opacity, transform, filter",
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
    };

    switch (variant) {
      case "up":
        return {
          ...base,
          transform: `translate3d(0, ${movement}, 0)`,
        };

      case "down":
        return {
          ...base,
          transform: `translate3d(0, -${movement}, 0)`,
        };

      case "left":
        return {
          ...base,
          transform: `translate3d(-${movement}, 0, 0)`,
        };

      case "right":
        return {
          ...base,
          transform: `translate3d(${movement}, 0, 0)`,
        };

      case "zoom":
        return {
          ...base,
          transform: `scale(${scaleFrom})`,
        };

      case "fade":
        return base;

      case "blur":
      case "focus":
        return {
          ...base,
          filter: "blur(18px)",
          transform: "translate3d(0, 20px, 0)",
        };

      case "rotate":
        return {
          ...base,
          transform: "scale(0.9) rotate(-8deg)",
        };

      case "rotate-left":
        return {
          ...base,
          transform: "translate3d(-40px, 0, 0) rotate(-6deg)",
        };

      case "rotate-right":
        return {
          ...base,
          transform: "translate3d(40px, 0, 0) rotate(6deg)",
        };

      case "flip":
        return {
          ...base,
          transform: "perspective(1000px) rotateX(15deg) scale(0.95)",
        };

      case "flip-up":
        return {
          ...base,
          transform: "perspective(1000px) translateY(40px) rotateX(15deg)",
        };

      case "flip-down":
        return {
          ...base,
          transform: "perspective(1000px) translateY(-40px) rotateX(-15deg)",
        };

      case "clip":
        return {
          ...base,
          clipPath: "inset(0 50% 0 50%)",
        };

      case "clip-up":
        return {
          ...base,
          clipPath: "inset(100% 0 0 0)",
        };

      case "clip-down":
        return {
          ...base,
          clipPath: "inset(0 0 100% 0)",
        };

      case "clip-left":
        return {
          ...base,
          clipPath: "inset(0 100% 0 0)",
        };

      case "clip-right":
        return {
          ...base,
          clipPath: "inset(0 0 0 100%)",
        };

      case "mask":
        return {
          ...base,
          clipPath: "inset(0 0 100% 0)",
          transform: "translateY(20px)",
        };

      case "circular":
        return {
          ...base,
          clipPath: "circle(0% at 50% 50%)",
          transform: "scale(0.95)",
        };

      case "depth":
        return {
          ...base,
          transform: "perspective(1000px) translateZ(-150px) scale(0.85)",
        };

      case "split-text":
      case "light-sweep":
      case "line-draw":
        return {
          ...base,
          transform: "translateY(12px)",
        };

      default:
        return base;
    }
  };

  const getShownStyle = (): CSSProperties => ({
    opacity: 1,
    transform: "translate3d(0, 0, 0) scale(1) rotate(0deg)",
    filter: "blur(0px)",
    clipPath: "inset(0 0 0 0)",
    transitionProperty: "opacity, transform, filter, clip-path",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: revealEasing[easing],
    willChange: "auto",
  });

  const revealStyle = shown
    ? getShownStyle()
    : getHiddenStyle();

  /* =====================================================
     SPLIT TEXT RENDERING
  ===================================================== */

  const renderSplitText = () => {
    if (typeof children !== "string") {
      return children;
    }

    const parts =
      splitBy === "character"
        ? Array.from(children)
        : children.split(/(\s+)/);

    return parts.map((part, index) => {
      const isWhitespace = /^\s+$/.test(part);

      if (isWhitespace) {
        return part;
      }

      const content =
        splitBy === "character"
          ? part
          : part;

      return (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 25px, 0)",
            filter: shown ? "blur(0)" : "blur(8px)",
            transitionProperty: "opacity, transform, filter",
            transitionDuration: `${duration}ms`,
            transitionDelay: `${delay + index * 45}ms`,
            transitionTimingFunction: revealEasing[easing],
          }}
        >
          {content}
        </span>
      );
    });
  };

  /* =====================================================
     LIGHT SWEEP AND LINE DRAW
  ===================================================== */

  const showLightSweep =
    variant === "light-sweep" && shown;

  const showLineDraw =
    variant === "line-draw" && shown;

  return (
    <>
      <div
        ref={ref}
        style={{
          ...revealStyle,
          position: "relative",
          ...(glow && shown
            ? {
                filter: "drop-shadow(0 0 18px rgba(245, 158, 11, 0.25))",
              }
            : {}),
        }}
        className={`transform-gpu ${className}`}
      >
        <div
          ref={innerRef}
          className="relative"
          style={{
            transition: "transform 180ms ease-out",
          }}
        >
          {variant === "split-text"
            ? renderSplitText()
            : children}
        </div>

        {variant === "light-sweep" && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[45%]"
            style={{
              background:
                "linear-gradient(110deg, transparent, rgba(255,255,255,0.35), transparent)",
              transform: showLightSweep
                ? "translateX(250%)"
                : "translateX(-120%)",
              transition: `transform ${Math.max(
                duration,
                1100
              )}ms ${revealEasing.premium}`,
              transitionDelay: `${delay + 150}ms`,
            }}
          />
        )}

        {variant === "line-draw" && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-amber-300 via-amber-500 to-transparent"
            style={{
              transform: showLineDraw
                ? "scaleX(1)"
                : "scaleX(0)",
              transition: `transform ${duration}ms ${revealEasing.premium}`,
              transitionDelay: `${delay + 150}ms`,
            }}
          />
        )}
      </div>

      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .transform-gpu {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            clip-path: none !important;
          }
        }
      `}</style>
    </>
  );
}

/* =========================================================
   STAGGERED REVEAL GROUP
========================================================= */

interface RevealGroupProps {
  children: ReactNode;
  className?: string;

  variant?: RevealVariant;

  stagger?: number;
  duration?: number;

  once?: boolean;

  easing?: RevealEasing;

  distance?: number;

  splitBy?: SplitBy;

  scaleFrom?: number;

  glow?: boolean;
}

/**
 * Automatically reveals child elements one after another.
 *
 * Useful for service cards, feature grids,
 * testimonials and product collections.
 */

export function RevealGroup({
  children,
  className = "",
  variant = "up",
  stagger = 120,
  duration = 850,
  once = true,
  easing = "premium",
  distance = 48,
  splitBy = "word",
  scaleFrom = 0.82,
  glow = false,
}: RevealGroupProps) {
  const items = Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, index) => (
        <Reveal
          key={index}
          variant={variant}
          delay={index * stagger}
          duration={duration}
          once={once}
          easing={easing}
          distance={distance}
          splitBy={splitBy}
          scaleFrom={scaleFrom}
          glow={glow}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}
