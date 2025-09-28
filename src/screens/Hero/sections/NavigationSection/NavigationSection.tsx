import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const NavigationSection = (): JSX.Element => {
  const navigationDots = [
    { active: false },
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-14 px-0 py-[72px] relative">
      <div className="flex flex-col w-full max-w-[694px] items-center gap-3 relative">
        <Badge
          variant="outline"
          className="inline-flex items-center justify-center gap-2 pl-2 pr-3 py-2 bg-[#ffffff1f] rounded-[34px] border-[#ffffff29] text-primaryblue-50 h-auto"
        >
          <img
            className="relative w-6 h-6"
            alt="Frame"
            src="/frame-2147224331-1.svg"
          />
          <span className="font-body-r font-[number:var(--body-r-font-weight)] text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)]">
            Testimonials
          </span>
        </Badge>

        <div className="flex flex-col items-center gap-2 relative w-full">
          <h1 className="w-full mt-[-1.00px] font-display-XL font-[number:var(--display-XL-font-weight)] text-white text-[length:var(--display-XL-font-size)] text-center tracking-[var(--display-XL-letter-spacing)] leading-[var(--display-XL-line-height)] flex items-center justify-center [font-style:var(--display-XL-font-style)]">
            UNLEASH AI - POWERED VIDEO CREATION
          </h1>

          <p className="w-full font-body-XL font-[number:var(--body-XL-font-weight)] text-neutral-300 text-[length:var(--body-XL-font-size)] text-center tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] flex items-center justify-center [font-style:var(--body-XL-font-style)]">
            From script to stunning visuals in minutes — no editing skills
            required.
          </p>
        </div>
      </div>

      <div className="inline-flex flex-col items-center gap-10 relative w-full">
        <img
          className="relative w-full max-w-[1440px] h-[353.04px] object-cover"
          alt="Mask group"
          src="/mask-group-3.png"
        />

        <nav
          className="inline-flex items-start gap-2 relative"
          aria-label="Testimonial navigation"
        >
          {navigationDots.map((dot, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded transition-colors ${
                dot.active ? "bg-foundation-blueblue-50" : "bg-neutrals-900"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={dot.active ? "true" : "false"}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};
