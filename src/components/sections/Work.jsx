import React from "react";
import { Badge } from "../Badge";
import Modal from "../Modal";
import Projects from "../../utils/Projects";

const Work = () => {
  return (
    <>
      <section
        id="work"
        className="container flex flexs flex-col px-4 md:px-16 xl:mt-40 xl:px-0"
      >
        <div className="flex flex-col gap-6 md:gap-9 xl:gap-[3.75rem]">
          <div>
            <h2 className="primary-heading transitions">Recent Work</h2>
          </div>
          <Projects />
        </div>
      </section>
    </>
  );
};

export default Work;
