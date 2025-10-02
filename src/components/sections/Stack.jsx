import React from "react";
import html from "../../assets/stacks/html.svg";
import css from "../../assets/stacks/css.svg";
import js from "../../assets/stacks/js.svg";
import react from "../../assets/stacks/react.svg";
import tailwindcss from "../../assets/stacks/tailwindcss.svg";
import figma from "../../assets/stacks/figma.svg";
import ps from "../../assets/stacks/ps.svg";
import git from "../../assets/stacks/git.svg";

const Stack = () => {
  return (
    <>
      <section className="container flex flexs flex-col px-4 md:px-16 xl:px-0">
        <div className="flex flex-col gap-6 md:gap-9 xl:gap-[3.75rem]">
          <h1 className="primary-heading transitions">Stack</h1>
          <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 md:grid md:grid-cols-2 md:grid-rows-4">
            <div className="flex items-center w-full gap-1.5 md:gap-2 xl:gap-2.5 bg-card-bg p-4 md:p-5 xl:p-6">
              <div className="icon-container bg-logo-bg">
                <img src={html} alt="html logo" className="icon" />
              </div>
              <div>
                <h6 className="primary-caption">HTML</h6>
                <p className="secondary-caption text-white/50">
                  Markup Language
                </p>
              </div>
            </div>
            <div className="flex items-center w-full gap-1.5 md:gap-2 xl:gap-2.5 bg-card-bg p-4 md:p-5 xl:p-6">
              <div className="icon-container bg-logo-bg">
                <img src={css} alt="css logo" className="icon" />
              </div>
              <div>
                <h6 className="primary-caption">CSS</h6>
                <p className="secondary-caption text-white/50">
                  Stylesheet Language
                </p>
              </div>
            </div>
            <div className="flex items-center w-full gap-1.5 md:gap-2 xl:gap-2.5 bg-card-bg p-4 md:p-5 xl:p-6">
              <div className="icon-container bg-logo-bg">
                <img src={js} alt="js logo" className="icon" />
              </div>
              <div>
                <h6 className="primary-caption">Javascript</h6>
                <p className="secondary-caption text-white/50">
                  Scripting Language
                </p>
              </div>
            </div>
            <div className="flex items-center w-full gap-1.5 md:gap-2 xl:gap-2.5 bg-card-bg p-4 md:p-5 xl:p-6">
              <div className="icon-container bg-logo-bg">
                <img src={react} alt="react logo" className="icon" />
              </div>
              <div>
                <h6 className="primary-caption">react</h6>
                <p className="secondary-caption text-white/50">
                  JavaScript Library
                </p>
              </div>
            </div>
            <div className="flex items-center w-full gap-1.5 md:gap-2 xl:gap-2.5 bg-card-bg p-4 md:p-5 xl:p-6">
              <div className="icon-container bg-logo-bg">
                <img
                  src={tailwindcss}
                  alt="tailwindcss logo"
                  className="icon"
                />
              </div>
              <div>
                <h6 className="primary-caption">tailwindcss</h6>
                <p className="secondary-caption text-white/50">CSS Framework</p>
              </div>
            </div>
            <div className="flex items-center w-full gap-1.5 md:gap-2 xl:gap-2.5 bg-card-bg p-4 md:p-5 xl:p-6">
              <div className="icon-container bg-logo-bg">
                <img src={figma} alt="figma logo" className="icon" />
              </div>
              <div>
                <h6 className="primary-caption">figma</h6>
                <p className="secondary-caption text-white/50">
                  Design Software
                </p>
              </div>
            </div>
            <div className="flex items-center w-full gap-1.5 md:gap-2 xl:gap-2.5 bg-card-bg p-4 md:p-5 xl:p-6">
              <div className="icon-container bg-logo-bg">
                <img src={ps} alt="ps logo" className="icon" />
              </div>
              <div>
                <h6 className="primary-caption">Photoshop</h6>
                <p className="secondary-caption text-white/50">
                  Graphics Editor
                </p>
              </div>
            </div>
            <div className="flex items-center w-full gap-1.5 md:gap-2 xl:gap-2.5 bg-card-bg p-4 md:p-5 xl:p-6">
              <div className="icon-container bg-logo-bg">
                <img src={git} alt="git logo" className="icon" />
              </div>
              <div>
                <h6 className="primary-caption">git</h6>
                <p className="secondary-caption text-white/50">
                  Version Control
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stack;
