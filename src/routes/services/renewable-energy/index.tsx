import { component$ } from "@builder.io/qwik";
import { ServiceHero } from "~/components/sections/service-hero/service-hero";
import { AboutSection } from "./about-section";
import { TestimonialCard } from "~/components/standalone/testimonial-card/testimonial-card";
import { PhotoGrid } from "~/components/photo-grid/photo-grid";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { Navbar } from "~/components/standalone/navbar/navbar";

export default component$(() => {
  return (
    <main>
      {/* <Navbar /> */}

      <ServiceHero />

      <AboutSection />

      <PhotoGrid />

      <TestimonialCard />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to NeoloProjects",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
