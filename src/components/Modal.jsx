import React, { useEffect, useRef } from "react";

const Modal = ({
  isOpen,
  onClose,
  project,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  prevProject,
  nextProject,
}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [project]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-bg/70 backdrop-blur-xs flex items-center justify-center px-4 z-50"
      onClick={onClose}
    >
      <div
        key={project?.id || project?.title}
        ref={contentRef}
        className="animate-fadeIn flex flex-col gap-12 md:gap-[4.5rem] lg:gap-[7.5rem] px-4 md:px-16 py-12 md:py-[4.5rem] lg:py-[7.5rem] bg-bg-inverse max-w-3xl w-full max-h-[90vh] overflow-y-auto relative transitions"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="flex gap-1.5 md:gap-2 xl:gap-2.5 items-center secondary-body text-black/50 hover:text-black bg-bg-inverse transitions"
        >
          <span>Back</span>
        </button>
        <div className="">
          <h2 className="primary-display text-black">
            {project?.title || "Untitled"}
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:gap-9 xl:gap-[3.75rem]">
          <div className="flex flex-col gap-3 md:gap-4 xl:gap-5">
            <h6 className="text-black/50 secondary-body">Role / Services</h6>
            <hr className="h-[0.3px] md:h-[0.4px] xl:h-[0.5px] border-0 bg-black/50" />
            <h4 className="text-black primary-body">{project.role}</h4>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 xl:gap-5">
            <h6 className="text-black/50 secondary-body">Credits</h6>
            <hr className="h-[0.3px] md:h-[0.4px] xl:h-[0.5px] border-0 bg-black/50" />
            <h4 className="text-black primary-body">
              {project.credit && (
                <div className="primary-body">
                  {Object.entries(project.credit).map(
                    ([role, person]) =>
                      person && (
                        <p key={role}>
                          <span>{role}:</span>
                          {person}
                        </p>
                      )
                  )}
                </div>
              )}
            </h4>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 xl:gap-5">
            <h6 className="text-black/50 secondary-body">Links</h6>
            <hr className="h-[0.3px] md:h-[0.4px] xl:h-[0.5px] border-0 bg-black/50" />
            <h4 className="text-black primary-body">
              {project.link && (
                <div>
                  {Object.entries(project.link).map(([label, url]) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-black/50 transitions"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-4 xl:gap-5">
          {project?.image && (
            <img
              src={project.image}
              alt={project.alt || "Project Image"}
              className="w-full pointer-events-none shadow-md"
            />
          )}
          <p className="secondary-body text-black/50">{project?.description}</p>
        </div>

        {/* Footer */}

        <div className="flex flex-nowrap justify-between items-start gap-3">
          {hasPrev && (
            <button
              onClick={onPrev}
              className="flex flex-col w-full text-black/50 text-left gap-1.5 md:gap-2.5 xl:gap-3 cursor-pointer group"
            >
              <p className="secondary-body">Previous</p>
              <h2 className="primary-body text-black group-hover:text-black/50">
                {prevProject.title || "Untitled"}
              </h2>
            </button>
          )}
          {hasNext && (
            <button
              onClick={onNext}
              className="flex flex-col w-full text-black/50 text-right gap-1.5 md:gap-2.5 xl:gap-3 cursor-pointer group"
            >
              <p className="secondary-body">Next</p>
              <h2 className="primary-body text-black group-hover:text-black/50">
                {nextProject.title || "Untitled"}
              </h2>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
