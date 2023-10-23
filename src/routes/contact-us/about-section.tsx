import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const AboutSection = component$(() => {
  return (
    <section
      class={css({
        position: "relative",

        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "185rem",
        backgroundColor: "main-bgColor",
        color: "main-textColor",
        smOnly: {
          width: "100vw",
        },
      })}
    >
      <div
        class={css({
          display: "flex",
          flexDirection: "column",
          gap: "60rem",
        })}
      >
        <Header />

        <ImageArea />
      </div>
    </section>
  );
});

const Header = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "19rem",
        // backgroundColor: "rebeccapurple",
        width: "100%",
      })}
    >
      <h2
        class={css({
          fontSize: "27rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        })}
      >
        About Us
      </h2>

      <p
        class={css({
          position: "relative",
          textAlign: "center",

          width: { base: "505rem", md: "1017rem" },
          height: "281rem",

          fontSize: { base: "34rem", md: "56rem" },
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "118%" /* 66.08px */,
          letterSpacing: { base: "-2.72rem", md: "-4.48rem" },
        })}
      >
        Neoloprojects is largest engineering services provider that has been
        helping thousands of people to develop their dream
      </p>
    </section>
  );
});

const ImageArea = component$(() => {
  return (
    <div
      class={css({
        position: "relative",
        backgroundColor: "lime",

        width: { base: "100vw", md: "1702rem" },
        height: { base: "341rem", md: "818rem" },
        borderRadius: { base: "0rem", md: "0px 0px 80rem 80rem" },
      })}
    >
      {" "}
    </div>
  );
});
