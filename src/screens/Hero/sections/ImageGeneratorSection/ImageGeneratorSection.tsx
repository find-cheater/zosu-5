import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const ImageGeneratorSection = (): JSX.Element => {
  const tabItems = [
    { value: "all", label: "ALL", active: true },
    { value: "sci-fi", label: "SCI-FI & FUTURISTIC", active: false },
    { value: "fantasy", label: "FANTASY & MYSTICAL", active: false },
    { value: "action", label: "ACTION & ADVENTURE", active: false },
    { value: "nature", label: "NATURE & ANIMALS", active: false },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center gap-14 px-16 py-[72px] relative bg-[#ffffff0a]">
      <div className="flex flex-col max-w-[694px] items-center gap-3 relative">
        <Badge
          variant="secondary"
          className="inline-flex items-center justify-center gap-2 pl-2 pr-3 py-2 bg-[#ffffff1f] rounded-[34px] border border-solid border-[#ffffff29] text-primaryblue-50"
        >
          <img
            className="relative w-6 h-6"
            alt="Frame"
            src="/frame-2147224331-1.svg"
          />
          <span className="font-display-XS font-[number:var(--display-XS-font-weight)] text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)]">
            RESULT
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

      <div className="flex flex-col items-center gap-8 relative w-full">
        <Tabs defaultValue="all" className="w-auto">
          <TabsList className="p-1.5 bg-[#ffffff1f] rounded-[46px] border border-solid border-[#0000000d] h-auto">
            {tabItems.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className={`gap-2 px-4 py-1 rounded-[42px] h-auto ${
                  item.active
                    ? "bg-white text-[#191124] data-[state=active]:bg-white data-[state=active]:text-[#191124]"
                    : "bg-transparent text-white opacity-60 data-[state=active]:bg-white data-[state=active]:text-[#191124]"
                }`}
              >
                <span className="font-display-XS font-[number:var(--display-XS-font-weight)] text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
                  {item.label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <img
          className="relative w-full"
          alt="Frame"
          src="/frame-2147238611-1.svg"
        />

        <Button className="inline-flex px-8 py-4 h-auto overflow-hidden border-2 border-solid border-[#ffffff33] bg-[linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] items-center justify-center gap-2 rounded-xl hover:opacity-90 transition-opacity">
          <span className="flex items-center justify-center mt-[-2.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-neutral-0 text-[length:var(--display-XS-font-size)] text-center tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] whitespace-nowrap [font-style:var(--display-XS-font-style)]">
            MAKE YOUR OWN VIDEO
          </span>
        </Button>
      </div>
    </section>
  );
};
