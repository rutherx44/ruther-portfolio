import React from "react";
import { Button } from "../Button";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="container flex flexs flex-col px-4 md:px-16 xl:px-0 py-12 md:py-[4.5rem] lg:py-[7.5rem]"
      >
        <div className="flex flex-col gap-6 md:gap-9 xl:gap-[3.75rem]">
          <div className="flex flex-col gap-4 md:gap-6 xl:gap-8">
            <h1 className="primary-heading transitions">
              Let’s work
              <br />
              together
            </h1>
            <p className="text-white/50 secondary-body transitions md:w-1/2">
              Whether you’re starting a project, have a business inquiry, or
              just want to say hello, my inbox is always open—I’ll be sure to
              get back to you as soon as I can.
            </p>
            <div>
              <a href="mailto:ruther.diox44@gmail.com">
                <Button displayText="Get in touch" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
