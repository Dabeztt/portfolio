import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Bui Phat Dat
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
            I'm a software developer. Passionate about web & mobile development.
            Always eager to learn and contribute to real-world projects.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View my projects
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/chibi/hi.png"
            alt="Chibi Bui Phat Dat"
            className="w-28 sm:w-32 md:w-auto md:max-w-sm h-auto opacity-0 animate-fade-in-delay-4"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
