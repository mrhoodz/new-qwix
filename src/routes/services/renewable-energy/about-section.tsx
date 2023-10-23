/* eslint-disable qwik/jsx-key */
import { component$ } from "@builder.io/qwik";
import type { ServiceCompetenceCardProps } from "~/components/standalone/service-competence-card/service-competence-card";
import { ServiceCompetenceCard } from "~/components/standalone/service-competence-card/service-competence-card";
import { css } from "~/styled-system/css";

export const AboutSection = component$(() => {
  return (
    <section
      class={css({
        position: "relative",

        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "175rem",
        paddingBottom: "85rem",
        backgroundColor: "main-bgColor",
        // color: "main-textColor",
      })}
    >
      <div
        class={css({
          display: "flex",
          flexDirection: "column",
          gap: "110rem",
        })}
      >
        <Header />

        <Content />
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
        color: "main-textColor",
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
        Why we go above and beyond
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

const Content = component$(() => {
  const CardsInfo: ServiceCompetenceCardProps[] = [
    {
      headerMetric: "34 +",
      title: "Safety and Community",
      headerDetails: "Projects Completed",
      body: "With years of industry-leading experience, Neoloprojects is your trusted partner in renewable energy. Our proven track record showcases our commitment to excellence and our ability to deliver successful projects, time and again.",
      backgroundColor: "purpleBlue-bgColor",
      color: "main-textColor",
    },
    {
      headerMetric: "3 +",
      title: "Experience and Commitment",
      headerDetails: "Years Serving",
      body: "We prioritize safety in every aspect of our work, ensuring that your renewable energy project is secure and reliable. As a responsible company, we're dedicated to being an asset to the communities we serve. Your project's success benefits not only your organization but also the larger community and environment.",
      backgroundColor: "orange-bgColor",
      color: "main-bgColor",
    },
  ];

  return (
    <section
      class={css({
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        gap: "178rem",
        paddingBottom: "70rem",
      })}
    >
      {/* div */}

      {CardsInfo.map((i) => (
        <ServiceCompetenceCard
          title={i.title}
          headerMetric={i.headerMetric}
          headerDetails={i.headerDetails}
          body={i.body}
          backgroundColor={i.backgroundColor}
          color={i.color}
          variant={"small" as any}
        />
      ))}
    </section>
  );
});
