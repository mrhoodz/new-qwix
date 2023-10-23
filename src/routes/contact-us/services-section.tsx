import { component$ } from "@builder.io/qwik";
import { ProjectOverviewCard } from "~/components/standalone/project-overview-card/project-overview-card";
import { SearchComponent } from "~/components/standalone/search-component/search-component";
// import { SearchComponent } from "~/components/standalone/search-component/search-component";
import { css } from "~/styled-system/css";

export const ServicesSection = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        width: { base: "505rem", md: "1700rem" },
        marginInline: "auto",
        marginTop: "180rem",
        marginBottom: "190rem",
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
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "22rem",
      })}
    >
      <h3
        class={css({
          position: "relative",
          textAlign: "center",
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

const Content = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        gap: "49rem",
      })}
    >
      <ProjectOverviewCard variant={"Primary" as any} />
      <ProjectOverviewCard variant={"Primary" as any} />
      <ProjectOverviewCard variant={"Primary" as any} />
    </section>
  );
});
