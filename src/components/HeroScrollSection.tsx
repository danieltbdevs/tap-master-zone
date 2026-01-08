"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import plumberHero from "@/assets/plumber-hero-dramatic.webp";

export function HeroScrollSection() {
  return (
    <section className="bg-[#0B0C10]">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <span className="text-sm sm:text-base font-semibold tracking-widest uppercase text-emergency-red mb-4">
              Professional Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              See Our Team
              <br />
              <span className="text-emergency-red">In Action</span>
            </h2>
          </div>
        }
      >
        <img
          src={plumberHero}
          alt="Professional plumber at work"
          className="mx-auto rounded-2xl object-cover h-full w-full"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}

export default HeroScrollSection;
