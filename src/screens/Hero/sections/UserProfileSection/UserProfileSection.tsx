import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationColumns = [
  {
    title: "NAVIGATION",
    links: ["Products", "Company", "Pricing", "Insights", "Insights"],
  },
  {
    title: "NAVIGATION",
    links: ["Products", "Company", "Pricing", "Insights", "Insights"],
  },
  {
    title: "COMPANY",
    links: ["Careers", "Contact", "FAQs", "FAQs", "FAQs"],
  },
  {
    title: "RESOURCES",
    links: ["Privacy Policy", "Changelog", "Terms & Conditions"],
  },
];

const socialIcons = [
  { icon: FacebookIcon, alt: "FacebookIcon app symbol" },
  { icon: TwitterIcon, alt: "Social icons" },
  { icon: LinkedinIcon, alt: "Linkedin" },
  { icon: InstagramIcon, alt: "Social icons" },
];

export const UserProfileSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-start gap-[72px] pt-[72px] pb-8 px-16 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff14]">
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-6 relative self-stretch flex-[0_0_auto]">
          <div className="relative w-[291px] h-[124px] mr-[-2.00px]">
            <h1 className="absolute top-px left-0 h-[124px] flex items-center justify-center [font-family:'Clash_Grotesk-Semibold',Helvetica] font-normal text-white text-[104px] text-center tracking-[-4.16px] leading-[123.8px] whitespace-nowrap">
              VOSU
            </h1>

            <img
              className="absolute top-5 left-[266px] w-[23px] h-[23px]"
              alt="Trademark symbol"
              src="/trademark-symbol.svg"
            />
          </div>

          <div className="inline-flex items-center gap-[41px] pl-5 pr-2 py-2 relative flex-[0_0_auto] bg-[#ffffff0a] rounded-[52px] overflow-hidden">
            <span className="relative w-fit opacity-[0.72] font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap [font-style:var(--body-r-font-style)]">
              Subscribe our newsletter
            </span>

            <Button className="flex w-10 h-10 items-center justify-center gap-2 p-2.5 relative bg-generalwhite rounded-[42px] h-auto">
              <ArrowRightIcon className="relative w-6 h-6 mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] text-black" />
            </Button>
          </div>
        </div>

        <nav className="inline-flex flex-col items-end gap-10 relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-10 relative flex-[0_0_auto]">
            {navigationColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col w-36 items-start gap-4 relative"
              >
                <h3 className="relative self-stretch mt-[-1.00px] font-display-XS font-[number:var(--display-XS-font-weight)] text-neutrals-50 text-[length:var(--display-XS-font-size)] tracking-[var(--display-XS-letter-spacing)] leading-[var(--display-XS-line-height)] [font-style:var(--display-XS-font-style)]">
                  {column.title}
                </h3>

                <ul className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  {column.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="relative w-[136px] opacity-[0.72] font-body-r font-[number:var(--body-r-font-weight)] text-white text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] [font-style:var(--body-r-font-style)] cursor-pointer hover:opacity-100 transition-opacity"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </div>

      <div className="flex items-center justify-between px-0 py-6 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#303132]">
        <p className="relative w-fit mt-[-1.00px] font-body-r font-[number:var(--body-r-font-weight)] text-dark-shade30 text-[length:var(--body-r-font-size)] tracking-[var(--body-r-letter-spacing)] leading-[var(--body-r-line-height)] whitespace-nowrap [font-style:var(--body-r-font-style)]">
          2025 ©VOSU.AI. All rights reserved.
        </p>

        <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
          {socialIcons.map((social, index) => (
            <social.icon
              key={index}
              className="relative w-5 h-5 text-white opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
