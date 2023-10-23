import { component$ } from "@builder.io/qwik";
import { BigProjectCard } from "~/components/standalone/big-Project-card/big-Project-card";
import { MiniServiceCard } from "~/components/standalone/mini-service-card/mini-service-card";
import { SearchComponent } from "~/components/standalone/search-component/search-component";
import { css } from "~/styled-system/css";

export const HeroSection = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        paddingTop: { base: "145rem", md: "172rem" },
        paddingLeft: { base: "10rem", md: "140rem" },
      })}
    >
      <BigProjectCard
        imageURL="/images/projects/renewable-energy/hero.jpg"
        link="/services/renewable-energy"
      />

      <div
        class={css({
          position: "absolute",
          right: "104rem",
          top: "187rem",
          display: { base: "none", md: "flex" },
          flexDirection: "column",
          gap: "48rem",
        })}
      >
        <SearchComponent />

        <StackedMiniCards />
      </div>
    </section>
  );
});

const StackedMiniCards = component$(() => {
  return (
    <ul
      class={css({
        position: "relative",
        display: "flex",
        alignItems: "center",
        paddingTop: "283rem",

        "& .mini": {
          position: "absolute",
          listStyle: "none",
        },

        "&:nth-child(1)": {
          // top: "460rem",
          // left: "-70rem",
        },
        // "&:nth-child(2)": {
        //   left: "40rem",
        // },
        // "&:nth-child(3)": {
        //   left: "470rem",
        // },
      })}
    >
      <li class="mini">
        <MiniServiceCard
          variant="3"
          subTitle="Renewable-energy"
          title="Go green, save the planet
          and your bills"
          imageURL="/images/projects/renewable-energy/hero.jpg"
          link="/services/renewable-energy"
        />
      </li>
      <li class="mini">
        <MiniServiceCard variant="2" />
      </li>
      <li class="mini">
        <MiniServiceCard
          variant="1"
          subTitle="Agricultural Engineering"
          title="Precision and innovation driven agriculture"
          imageURL="/images/projects/renewable-energy/hero.jpg"
          link="/services/renewable-energy"
        />
      </li>
    </ul>
  );
});
