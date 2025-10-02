import React, { useState } from "react";
import { ButtonLink, SocialButton } from "../Button";

const Footer = () => {
  const copyEmail = "ruther.diox44@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyEmail);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="container flex flexs flex-col px-4 md:px-16 xl:px-0">
        <div className="flex flex-col gap-6 md:gap-9 xl:gap-[3.75rem]">
          <div className="flex flex-col gap-4 md:gap-6 xl:gap-8">
            <div className="flex items-center gap-1.5 md:gap-2 xl:gap-2.5">
              <h1 className="primary-display text-primary transitions">RD.</h1>
              <h4 className="primary-body text-white transitions">
                Ruther Dio
              </h4>
            </div>
            <div className="flex flex-col items-start gap-3 md:gap-4 xl:gap-5">
              <p className="secondary-body text-white/50 md:w-1/2">
                Designing engaging UI/UX and turning them into functional,
                modern front-end interfaces.
              </p>
              <div className="cursor-pointer">
                <SocialButton />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 md:gap-4 xl:gap-5">
            <h3 className="primary-body transitions">Navigation</h3>
            <div className="flex flex-col gap-1.5 md:gap-2 xl:gap-2.5 transitions">
              <ButtonLink displayText="Home" onClick={handleScrollTop} />
              <ButtonLink
                displayText="Recent work"
                onClick={() => handleScroll("work")}
              />
              <ButtonLink
                displayText="About me"
                onClick={() => handleScroll("about")}
              />
              <ButtonLink
                displayText="Let’s work together"
                onClick={() => handleScroll("contact")}
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 md:gap-4 xl:gap-5">
            <h3 className="primary-body transitions">Get in touch</h3>
            <div className="flex flex-col gap-1.5 md:gap-2 xl:gap-2.5 secondary-body transitions">
              <div>
                <p className="text-white">Email</p>
                <div className="flex gap-1.5 md:gap-2 xl:gap-2.5">
                  <p className="text-white/50">{copyEmail}</p>
                  <button
                    onClick={handleCopy}
                    className="bg-primary secondary-body-uc px-2 md:px-2.5 xl:px-3 rounded-full text-white hover:bg-primary/70 transitions cursor-pointer"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
              <div>
                <p className="text-white">Location</p>
                <p className="text-white/50">Bulacan, Philippines</p>
              </div>
              <div>
                <p className="text-white">Availability</p>
                <p className="text-text-accent">Available for work</p>
              </div>
              <ButtonLink displayText="Back to top" onClick={handleScrollTop} />
            </div>
          </div>
          <hr className="h-[0.3px] md:h-[0.4px] xl:h-[0.5px] border-0 bg-white/50"></hr>
          <p className="text-white/50">
            © 2025. All rights reserved.
            <br />
            Designed and developed by Ruther Dio.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
