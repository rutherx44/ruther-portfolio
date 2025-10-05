import React from "react";
import { Toaster } from "react-hot-toast";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import Stack from "./components/sections/Stack";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-12 mb-4 md:gap-[4.5rem] md:mb-6 lg:gap-[7.5rem] lg:mb-16 xl:gap-8 xl:grid xl:grid-cols-2 xl:grid-rows-[auto_auto] xl:gap-y-40 xl:px-16 2xl:px-0 transitions">
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              icon: null,
              style: {
                background: "#052e16",
                color: "#FFFFFF",
                borderRadius: "0",
              },
            },
            error: {
              icon: null,
              style: {
                background: "#4c0519",
                color: "#FFFFFF",
                borderRadius: "0",
              },
            },
          }}
        />
        <div>
          <Hero />
        </div>
        <div className="flex flex-col gap-12 md:gap-[4.5rem] lg:gap-[7.5rem] xl:gap-40">
          <Work />
          <About />
          <Stack />
        </div>
        <div className="flex flex-col gap-12 md:gap-[4.5rem] lg:gap-[7.5rem] col-start-2">
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
