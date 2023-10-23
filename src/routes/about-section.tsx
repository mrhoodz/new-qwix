/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const AboutSection = component$(() => {
  return (
    <div
      class={css({
        position: "relative",
        backgroundColor: "main-bgColor",
        height: { base: "780rem", md: " 980rem" },
        paddingTop: { base: "20rem", md: "140rem" },
        marginTop: { base: "0rem", md: "130rem" },
        marginBottom: { base: " 40rem", md: "730rem" },
      })}
    >
      <section
        class={css({
          position: "relative",

          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "60rem",
        })}
      >
        <div
          class={css({
            display: "flex",
            flexDirection: "column",
            gap: { base: "30rem", md: "110rem" },
          })}
        >
          <Header />

          <ImageArea />
        </div>
      </section>
    </div>
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
        color: "white",
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
        // backgroundColor: "lime",

        width: { base: "514rem", md: "1702rem" },
        height: { base: "341rem", md: "818rem" },
        borderRadius: { base: "0rem", md: "0px 0px 80rem 80rem" },
        overflow: "hidden",
        "& img": {
          position: "relative",
          width: "100%",
          height: "auto",
        },
      })}
    >
      <img
        src={"/images/pages/home/sections/welding-image.jpg"}
        alt={"Image of a man welding metal"}
      />{" "}
    </div>
  );
});
