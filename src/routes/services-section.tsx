import { component$ } from "@builder.io/qwik";
import { ProjectOverviewCard } from "~/components/standalone/project-overview-card/project-overview-card";
import { SearchComponent } from "~/components/standalone/search-component/search-component";
import { css } from "~/styled-system/css";

interface ServiceCardProps {
  title?: string;
  location?: string;
  size?: string;
  year?: string;
  body?: string;
}

export const ServicesSection = component$<ServiceCardProps>(() => {
  return (
    <section
      id="projects"
      class={css({
        position: "relative",
        width: { base: "505rem", md: "1700rem" },
        marginInline: "auto",
        marginTop: "180rem",
      })}
    >
      <Header />

      <Content />
    </section>
  );
});

const Header = component$(() => {
  return (
    <section
      class={css({
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "22rem",
      })}
    >
      <h3
        class={css({
          position: "relative",
          width: { base: "400rem", md: "574rem" },
          fontSize: { base: "46rem", md: "66rem" },
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "118%" /* 77.88px */,
          letterSpacing: { base: "-4.6rem", md: "-6.6rem" },
        })}
      >
        We are experts in the engineering space
      </h3>

      <SearchComponent />
    </section>
  );
});

// title?: string,
// Location?: string,
// size?: string
// year?: string

const Content = component$(() => {
  const serviceCardsDetails: ServiceCardProps[] = [
    {
      title: "Agricultural Engineering",
      location: "Rooisand, Kathu 3033",
      size: " 400m x 500m",
      year: "2022",
      body: "Elevate agricultural productivity with Neoloprojects. Precision and innovation drive our solutions.",
    },

    {
      title: "Electrical Engineering",
      location: "Rooisand, Kathu 3033",
      size: " 300m x 200m",
      year: "2022",

      body: "Reliable electrical solutions by Neoloprojects making environments safer and more efficient.",
    },

    {
      title: "Road Construction",
      location: "Rooisand, Kathu 3033",
      size: " 100m x 50m",
      year: "2022",
      body: "Transforming infrastructure and connecting communities with quality and safety at Neoloprojects.",
    },
  ];

  return (
    <section
      class={css({
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        gap: "49rem",
      })}
    >
      {serviceCardsDetails.map((i) => (
        <>
          {" "}
          <ProjectOverviewCard
            title={i.title}
            location={i.location}
            size={i.size}
            year={i.year}
            body={i.body}
            variant={"Primary" as any}
          />
        </>
      ))}
    </section>
  );
});
