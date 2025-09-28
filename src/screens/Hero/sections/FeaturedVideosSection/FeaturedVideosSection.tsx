import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const faqData = [
  {
    id: "item-1",
    question: "What Services Do You Offer?",
    answer:
      "I offer UI/UX design, web development, and branding to craft stunning digital experiences.I offer UI/UX design, web development, and branding to craft stunning digital experiences.",
    isOpen: true,
  },
  {
    id: "item-2",
    question: "What Tools And Technologies Do You Use?",
    answer: "",
    isOpen: false,
  },
  {
    id: "item-3",
    question: "Can I See More Of Your Work?",
    answer: "",
    isOpen: false,
  },
  {
    id: "item-4",
    question: "Do You Offer Consultations?",
    answer: "",
    isOpen: false,
  },
  {
    id: "item-5",
    question: "What's Your Design Process Like?",
    answer: "",
    isOpen: false,
  },
];

export const FeaturedVideosSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-14 px-16 py-[72px] w-full bg-[#ffffff0a]">
      <div className="flex items-start gap-10 w-full">
        <div className="flex flex-col items-start justify-center gap-8 flex-1">
          <div className="flex flex-col items-start justify-center gap-5 w-full">
            <Badge className="inline-flex items-center justify-center gap-2 pl-2 pr-3 py-2 bg-[#ffffff1f] rounded-[34px] border border-solid border-[#ffffff29] text-primaryblue-50 font-body-r font-[number:var(--body-r-font-weight)] text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)]">
              <img
                className="w-6 h-6"
                alt="Frame"
                src="/frame-2147224331-1.svg"
              />
              FAQ
            </Badge>

            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <h2 className="font-display-XL font-[number:var(--display-XL-font-weight)] text-white text-[length:var(--display-XL-font-size)] tracking-[var(--display-XL-letter-spacing)] leading-[var(--display-XL-line-height)] [font-style:var(--display-XL-font-style)]">
                FAQ&apos;S
              </h2>

              <p className="font-body-XL font-[number:var(--body-XL-font-weight)] text-neutral-200 text-[length:var(--body-XL-font-size)] tracking-[var(--body-XL-letter-spacing)] leading-[var(--body-XL-line-height)] [font-style:var(--body-XL-font-style)]">
                Find answers to common CaseConnect questions
              </p>
            </div>
          </div>

          <Button className="h-auto px-8 py-4 border-2 border-solid border-[#ffffff33] bg-[linear-gradient(270deg,rgba(225,183,75,1)_0%,rgba(232,65,99,1)_30%,rgba(166,4,255,1)_62%,rgba(100,0,255,1)_84%,rgba(62,8,224,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] rounded-xl font-display-XS font-[number:var(--display-XS-font-weight)] text-neutral-0 text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)]">
            CONTACT US
          </Button>
        </div>

        <div className="w-[793px] bg-[#ffffff0a] rounded-2xl p-4">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="flex flex-col gap-2"
          >
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-[#ffffff14] rounded-2xl border border-solid border-[#ffffff1f] p-5 data-[state=open]:bg-[#ffffff14] data-[state=closed]:bg-[#ffffff05]"
              >
                <AccordionTrigger className="flex items-center justify-between w-full p-0 hover:no-underline [&[data-state=open]>div]:bg-[#ffffff1f] [&[data-state=closed]>div]:bg-[#ffffff14]">
                  <span className="font-display-s font-[number:var(--display-s-font-weight)] text-white text-[length:var(--display-s-font-size)] tracking-[var(--display-s-letter-spacing)] leading-[var(--display-s-line-height)] [font-style:var(--display-s-font-style)]">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                {faq.answer && (
                  <AccordionContent className="pt-4 pb-0">
                    <p className="[text-shadow:0px_4px_4px_#00000040] opacity-[0.72] font-body-l font-[number:var(--body-l-font-weight)] text-white text-[length:var(--body-l-font-size)] tracking-[var(--body-l-letter-spacing)] leading-[var(--body-l-line-height)] [font-style:var(--body-l-font-style)]">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
