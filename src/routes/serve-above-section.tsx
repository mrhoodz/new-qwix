/* eslint-disable qwik/jsx-key */
import { component$ } from "@builder.io/qwik";
import {
  CompetenceCard,
  CompetenceCardProps,
} from "~/components/standalone/competence-card/competence-card";
import { css } from "~/styled-system/css";

export const ServeAboveSection = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        backgroundColor: "main-bgColor",
        marginTop: "250rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "130rem",
        gap: "65rem",
      })}
    >
      <Heading />

      <Content />
    </section>
  );
});

const Heading = component$(() => {
  return (
    <section
      class={css({
        color: "main-textColor",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <h3
        class={css({
          fontSize: "19rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        })}
      >
        OUR PROMISE
      </h3>

      <p
        class={css({
          fontSize: "48rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "118%",
          letterSpacing: "-4.32rem",
          textAlign: "center",

          // smOnly: {
          //   display: "flex",
          //   justifyContent: "center",
          //   textAlign: "center",
          // },

          // md: {
          //   display: "flex",
          //   justifyContent: "center",
          //   textAlign: "center",
          // },
        })}
      >
        Is to serve above and beyond
      </p>
    </section>
  );
});

const Content = component$(() => {
  const competanceCards: CompetenceCardProps[] = [
    {
      service: "Competance",
      body: "Years of industry-leading experience define our competence. Your project is in capable hands.",
      duration: "3+",
      footer: "YEARS OF EXPERIENCE",
    },

    {
      service: "Community",
      body: "We build with a purpose – for thriving communities. Our projects transform lives and make a difference.",
      duration: "331 +",
      footer: "PROJECTS COMPLETED",
    },
    {
      service: "Safety",
      body: "Safety is paramount. We've passed numerous safety tests to ensure your project's success and security.",
      duration: "3 +",
      footer: "SAFETY TESTS PASSED",
    },

    {
      service: "Committment",
      body: "Your project is our commitment to excellence. With years of experience and satisfied clients, we stand by our promise to deliver exceptional results.",
      duration: "546  +",
      footer: "CUSTOMERS SERVED",
    },
  ];

  return (
    <section
      class={css({
        display: "flex",
        justifyContent: "center",
        smOnly: {},
        gap: "68rem",
        flexWrap: "wrap",
        // backgroundColor: "red",
      })}
    >
      {competanceCards.map((i) => (
        <CompetenceCard
          service={i.service}
          body={i.body}
          duration={i.duration}
          footer={i.footer}
        />
      ))}
    </section>
  );
});
