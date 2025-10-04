import React, { useState } from "react";
import pds from "../assets/projects/pds.png";
import ambiance from "../assets/projects/ambiance.png";
import trailers from "../assets/projects/trailers.png";
import ascendly from "../assets/projects/ascendly.png";
import Card from "../components/Card";
import Modal from "../components/Modal";

const projects = [
  {
    image: pds,
    title: "Plain Design System",
    alt: "Plain Design System",
    badgeText: null,
    role: "Design",
    credit: {
      design: "Ruther Dio",
    },
    year: "2025",
    description:
      "A clean, modular design system made for rapid prototyping and consistent styling across apps.",
    link: {
      Mockup:
        "https://www.figma.com/design/UY1YybZZaz3yMB9eSVcbXS/Plain-Design-System?node-id=3127-32951&t=uQunuNJWuRrEgVQu-1",
    },
  },
  {
    image: ambiance,
    title: "Ambiance Interior Design Studio",
    alt: "Ambiance Interior Design Studio Landing Page",
    badgeText: null,
    role: "Development",
    credit: {
      design: "Roy Jeron Basada",
      development: "Ruther Dio",
    },
    year: "2025",
    description:
      "A raw idea is complex but by having collaboration with us, the experts. it can be refined or simplified.",
    link: {
      Mockup:
        "https://xd.adobe.com/view/e869d8be-1df1-4c7d-bb71-228cf1b8181a-bd3a/specs/",
      "Source Code": "https://github.com/rutherx44/ambiance?tab=readme-ov-file",
      "Live Demo": "https://ambiance-sable.vercel.app/",
    },
  },
  {
    image: trailers,
    title: "Trailers",
    alt: "Trailers Landing Page",
    badgeText: null,
    role: "Design & Development",
    credit: {
      design: "Ruther Dio",
      development: "Ruther Dio",
    },
    year: "2025",
    description:
      "Trailers is a responsive landing page with bold visuals, modern typography, and seamless navigation—crafted to deliver a cinematic, engaging experience across all devices.",
    link: {
      Mockup:
        "https://www.figma.com/design/jE2Y3x6JZ1GFUngV8DmRPD/Trailer-Landing-Page?node-id=2-3&t=dinLgHuUt6bi6vRF-1",
      "Design Showcase":
        "https://www.behance.net/gallery/233347411/Trailers-Landing-Page-%28-Mobile-to-Desktop-Preview-%29",
      "Source Code":
        "https://github.com/rutherx44/landing-pages/tree/main/trailers",
      "Live Demo": "https://trailers-landing-page.vercel.app/",
    },
  },
  {
    image: ascendly,
    title: "Ascendy",
    alt: "Ascendy Landing Page",
    badgeText: null,
    role: "Design & Development",
    credit: {
      design: "Ruther Dio",
      development: "Ruther Dio",
    },
    year: "2025",
    description:
      "This webinar landing page combines bold typography, vibrant colors, and clear structure to engage visitors, highlight expert value, and drive meaningful registrations with professionalism.",
    link: {
      Mockup:
        "https://www.figma.com/design/WxMycqKsbVtKD4s6jUnV4J/Ascendly-Landing-Page?node-id=6-55&t=a1vfy4pP06i3Ko0o-1",
      "Design Showcase":
        "https://www.behance.net/gallery/234570109/Ascendly-Landing-Page-%28-Mobile-to-Desktop-Preview-%29",
      "Source Code":
        "https://github.com/rutherx44/landing-pages/tree/main/ascendly",
      "Live Demo": "https://ascendly-landing-page.vercel.app/",
    },
  },
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <div className="flex flex-col gap-6 md:gap-9 xl:gap-[3.75rem]">
      {projects.map((proj, i) => (
        <Card key={i} {...proj} onClick={() => setSelectedIndex(i)} />
      ))}

      <Modal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        project={selectedIndex !== null ? projects[selectedIndex] : null}
        onPrev={() => setSelectedIndex((i) => (i > 0 ? i - 1 : i))}
        onNext={() =>
          setSelectedIndex((i) => (i < projects.length - 1 ? i + 1 : i))
        }
        hasPrev={selectedIndex > 0}
        hasNext={selectedIndex < projects.length - 1}
        prevProject={projects[selectedIndex - 1]}
        nextProject={projects[selectedIndex + 1]}
      />
    </div>
  );
};

export default Projects;
