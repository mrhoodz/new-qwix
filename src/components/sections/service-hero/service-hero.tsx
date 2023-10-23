/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface ServiceHeroProps {
  count?: any;
}

export const ServiceHero = component$<ServiceHeroProps>((props) => {
  //   const count = useSignal(0);
  props.count;
  return (
    <section
      class={css({
        position: "relative",
        // width: "100vw",
        height: "917rem",
        backgroundColor: "purple.700",

        display: "flex",
        alignItems: "flex-end",
        paddingBottom: "15rem",
      })}
    >
      <HeroImage />

      <Footer />
    </section>
  );
});

const HeroImage = component$(() => {
  return (
    <div
      class={css({
        position: "absolute",
        left: "0rem",
        top: "0rem",
        height: "100%",
        width: "100%",
        overflow: "hidden",

        "& img": {
          position: "relative",
          top: "-70rem",
          width: "100%",
          height: "auto",
        },
      })}
    >
      <img
        src="/images/projects/renewable-energy/hero.jpg"
        alt="The hero image goes here"
      />
    </div>
  );
});

const Footer = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        backgroundColor: "main-bgColor",
        bottom: "0rem",
        width: { md: "90%", base: "505rem" },
        marginInline: "auto",
        height: "max-content",
        display: "flex",

        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "18rem",
        paddingBlock: "28.5rem",
        paddingRight: { base: "34.5rem", md: "179rem" },
        paddingLeft: { base: "27.8rem", md: "205rem" },
        borderRadius: "38rem",
      })}
    >
      {/* details */}

      <div
        class={css({
          position: "relative",
          backgroundColor: "black",
          color: "main-textColor",
          fontStyle: "normal",
          fontWeight: "600",

          display: "flex",
          flexDirection: "column",
          gap: "15rem",
        })}
      >
        <h1
          class={css({
            fontSize: "24rem",

            lineHeight: "normal",
          })}
        >
          Renewable Energy
        </h1>

        <p
          class={css({
            position: "relative",
            width: { base: "446rem", md: "586rem" },
            fontSize: { base: "46rem", md: "54rem" },

            lineHeight: "127%" /* 68.58px */,
            letterSpacing: "-4.86rem",
          })}
        >
          Go green, save the planet and your bills
        </p>
      </div>

      {/* controls */}
      <div
        class={css({
          position: "relative",
          display: "flex",
          gap: "22rem",
          alignItems: "center",
        })}
      >
        <div
          class={css({
            position: "relative",
            height: { base: "75rem", md: "128rem" },
            width: { base: "75rem", md: "128rem" },
            backgroundColor: "orange-bgColor",

            borderRadius: "140rem",
          })}
        >
          .
        </div>
        <a href="mailto:info@neoloprojects.com?subject = Request for Qoute&body = I would like to request for a about for xxx">
          <div
            class={css({
              backgroundColor: "main-bgColor",
              border: "3rem solid",
              borderColor: "main-textColor",
              borderRadius: "140rem",

              padding: "32rem 36rem",
              color: "main-textColor",

              // textEdge: "cap",
              fontFamily: "Poppins",
              fontSize: { base: "20rem", md: "24rem" },
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "127%" /* 30.48px */,
              letterSpacing: "-0.6rem",
            })}
          >
            Get Quote
          </div>
        </a>
      </div>
    </section>
  );
});
