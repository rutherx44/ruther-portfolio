import React from "react";
import profile from "../../assets/profile.png";
import { Button, SocialButton } from "../Button";
import toast from "react-hot-toast";
import resume from "../../assets/ruther-dio-resume.pdf";

const Hero = () => {
  const handleDownload = () => {
    toast("Resume Downloaded!");
  };
  return (
    <>
      <section
        id="home"
        className="container mx-auto sticky inset-0 w-full h-screen flex flex-col items-center justify-center xl:h-auto xl:items-start xl:pt-40"
      >
        <div className="flex flex-col items-center gap-4 md:gap-6 xl:gap-8 xl:items-start">
          <div className="profile transitions">
            <img
              src={profile}
              alt="Ruther Picture"
              className="pointer-events-none"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-3 xl:gap-4">
            <h1 className="primary-display text-center xl:text-start transitions">
              Hi, I’m
              <br />
              Ruther Dio<span className="text-primary">.</span>
            </h1>
            <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 xl:items-start">
              <div className="flex flex-col secondary-body text-center gap-1.5 md:gap-2.5 xl:gap-3 xl:text-start transitions">
                <p className="text-white/50">
                  UI / UX Designer & Front-end Developer
                </p>
                <p className="flex felx-row gap-0.5 md:gap-1 xl:gap-1.5 text-white/50">
                  From Bulacan, Philippines.
                  <span className="text-text-accent">Available for work</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center md:flex-row gap-3 md:gap-2 lg:gap-2.5">
                <a href={resume} download onClick={handleDownload}>
                  <Button />
                </a>
                <SocialButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
