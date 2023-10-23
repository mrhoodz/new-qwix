import { component$ } from "@builder.io/qwik";
import { OurServiceAreas } from "~/components/standalone/our-service-areas/our-service-areas";
import { css } from "~/styled-system/css";

export const OurServiceArea = component$(() => {
  return (
    <section
      class={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "72rem",
        marginTop: "70rem",
      })}
    >
      <Header />

      <OurServiceAreas />
    </section>
  );
});

export const Header = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "lime",
      })}
    >
      <h3
        class={css({
          fontSize: "27rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        })}
      >
        Areas we have served before
      </h3>
      <p
        class={css({
          fontSize: "62rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "118%" /* 73.16px */,
          letterSpacing: "-4.96rem",
          textAlign: { base: "center", md: "left" },

          // smOnly: {
          //   textAlign: "center",
          // },
        })}
      >
        Areas we have served before
      </p>
    </section>
  );
});
