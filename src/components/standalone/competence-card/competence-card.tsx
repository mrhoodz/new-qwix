import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface CompetenceCardProps {
  service?: string;
  body?: string;
  duration?: string;
  footer?: string;
}

export const CompetenceCard = component$<CompetenceCardProps>((props) => {
  //   const count = useSignal(0);
  props.service;
  return (
    <section
      class={css({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "35rem",
        width: "399rem",
        padding: "35rem 31rem 28rem 23rem ",
        backgroundColor: "main-bgColor",
        color: "main-textColor",
        border: "2rem solid",
        borderColor: "main-textColor",
        borderRadius: "38rem",

        "& h4": {
          fontSize: "32rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "127%" /* 40.64px */,
          letterSpacing: "-0.8rem",
        },
      })}
    >
      {/* content */}

      <div
        class={css({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "21rem",
        })}
      >
        <h4 class={css({})}>{props.service}</h4>
        <p
          class={css({
            fontSize: "23rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "147.5%" /* 33.925px */,
            letterSpacing: "-1.518rem",
          })}
        >
          {props.body}
        </p>
      </div>

      {/* footer */}

      <div
        class={css({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "20rem",
        })}
      >
        <h4>{props.duration}</h4>
        <p
          class={css({
            fontSize: "21rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "147.5%" /* 30.975px */,
            letterSpacing: "-1.386rem",
          })}
        >
          {props.footer}
        </p>
      </div>
    </section>
  );
});
