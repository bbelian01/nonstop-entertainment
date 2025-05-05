"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

const Glow = React.forwardRef(function Glow({ className, variant, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(glowVariants({ variant }), className)}
      {...props}
    >
      <div
        className={cn(
          "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.5)_10%,_hsla(var(--brand-foreground)/0)_60%)] sm:h-[512px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
      <div
        className={cn(
          "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)] sm:h-[256px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
    </div>
  );
});

function HeroSection21st({
  badge,
  title,
  description,
  actions = [],
  backgroundVideo,
  backgroundImage,
  className,
}) {
  const titleRef = useRef(null);

  useEffect(() => {
    const splitText = () => {
      if (!titleRef.current) return;
      
      // Only split text if the title is a plain string
      if (typeof title === 'string') {
        const text = titleRef.current.innerText;
        const words = text.split(' ');
        titleRef.current.innerHTML = words.map(word =>
          `<span class="inline-block overflow-hidden"><span class="animate-title-word inline-block">${word}</span></span>`
        ).join(' ');
      }
    };
    splitText();
  }, [title]);

  return (
    <section
      className={cn(
        "relative bg-background",
        "py-16 md:py-24 lg:py-32 px-4 overflow-hidden",
        className
      )}
    >
      {/* Background Video or Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {backgroundVideo ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster={backgroundVideo.fallbackImage}
            >
              <source src={backgroundVideo.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </>
        ) : backgroundImage ? (
          <>
            <img
              src={backgroundImage}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </>
        ) : null}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Badge */}
          {badge && (
            <Badge 
              variant="outline" 
              className={cn(
                "animate-fade-in opacity-0 [animation-delay:200ms] gap-2",
                className?.includes("text-white") && "border-white/20 text-white"
              )}
            >
              <span className={cn(
                "text-muted-foreground",
                className?.includes("text-white") && "text-white/70"
              )}>{badge.text}</span>
              {badge.action && (
                <a href={badge.action.href} className="flex items-center gap-1 text-white">
                  {badge.action.text}
                  <ArrowRight className="h-3 w-3" />
                </a>
              )}
            </Badge>
          )}

          {/* Title */}
          <h1 
            ref={titleRef}
            className={cn(
              "relative z-10 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl [&_span]:inline-block [&_span]:overflow-hidden",
              className
            )}
          >
            {typeof title === 'string' ? (
              title
            ) : (
              <span className="animate-title-word">{title}</span>
            )}
          </h1>

          {/* Description */}
          <p className={cn(
            "max-w-2xl text-lg md:text-xl animate-fade-in opacity-0 [animation-delay:400ms]",
            className?.includes("text-white") ? "text-white/80" : "text-muted-foreground"
          )}>
            {description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 animate-fade-in opacity-0 [animation-delay:600ms]">
            {actions.map((action, index) => (
              <Button 
                key={index} 
                variant={action.variant || "default"} 
                size="lg" 
                asChild
                className={cn(
                  index === 0 && "shadow-lg relative overflow-hidden group",
                  index === 0 && "after:absolute after:inset-0 after:z-[-1] after:bg-primary/20 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100",
                  className?.includes("text-white") && action.variant === "outline" && "border-white text-white hover:bg-white/10"
                )}
              >
                <a href={action.href} className="flex items-center gap-2">
                  {action.text}
                  {action.icon || (index === 0 && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />)}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <Glow
        variant="center"
        className={cn(
          "animate-fade-in opacity-0 [animation-delay:800ms]",
          className?.includes("text-white") && "[--brand-foreground:255,255,255]"
        )}
      />
    </section>
  );
}

export default HeroSection21st; 