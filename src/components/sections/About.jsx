import React from "react";
import { Button } from "../Button";
import { Code, Sparkles } from "lucide-react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="container flex flexs flex-col px-4 md:px-16 xl:px-0"
      >
        <div className="flex flex-col gap-6 md:gap-9 xl:gap-[3.75rem]">
          <div className="flex flex-col gap-4 md:gap-6 xl:gap-8">
            <h1 className="primary-heading transitions">About me</h1>
            <div className="flex flex-col md:w-1/2 gap-4 md:gap-6 xl:gap-8 text-white/50 secondary-body transitions">
              <p>
                My journey to become a ui/ux designer and front-end developer
                has been shaped by multiple experiments and a constant push to
                improve.
              </p>
              <p>
                I don’t have any experience in those fields, so I need to watch
                numerous tutorials and read tons of documentation.
              </p>
              <p>
                Every project has taken me through a wide range of emotions and
                a generous amount of caffeine to design and build them from
                scratch.
              </p>
            </div>
            <div>
              <Button />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 md:flex-row">
            <div className="flex flex-col w-full gap-4 md:gap-6 xl:gap-8 bg-card-bg p-4 md:p-5 xl:p-6">
              <div className="icon-container bg-logo-bg">
                <Sparkles className="icon icon-stroke text-primary" />
              </div>
              <div className="flex flex-col gap-1.5 md:gap-2.5 xl:gap-3">
                <h3 className="primary-body transitions">Design</h3>
                <p className="secondary-body text-white/50">
                  User Research & Analysis
                </p>
                <p className="secondary-body text-white/50">Prototyping</p>
                <p className="secondary-body text-white/50">
                  Visual Design System
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 md:gap-6 xl:gap-8 bg-card-bg p-4 md:p-5 xl:p-6">
              <div className="icon-container bg-logo-bg">
                <Code className="icon icon-stroke text-primary" />
              </div>
              <div className="flex flex-col gap-1.5 md:gap-2.5 xl:gap-3">
                <h3 className="primary-body transitions">Deployment</h3>
                <p className="secondary-body text-white/50">
                  Responsive Wed Development
                </p>
                <p className="secondary-body text-white/50">
                  Performance Optimization
                </p>
                <p className="secondary-body text-white/50">
                  Cross-browser Compatibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
