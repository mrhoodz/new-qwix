import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface PhotoGridProps {
  count?: any;
}

export const PhotoGrid = component$<PhotoGridProps>((props) => {
  props.count;

  return (
    <section
      class={css({
        display: "flex",
        flexWrap: "wrap",
        gap: "43rem",

        backgroundColor: "black",
        justifyContent: "center",
        // gridTemplateRows:"  553rem"

        "& div": {
          position: "relative",
          backgroundColor: "pink",
          height: "553rem",
          border: "black",
        },
      })}
    >
      <div class={css({ width: "499rem" })}>1</div>
      <div class={css({ width: "1043rem" })}>2</div>
      <div class={css({ width: "771rem" })}>3</div>
      <div class={css({ width: "771rem" })}>3</div>
      <div class={css({ width: "499rem" })}>4</div>
      <div class={css({ width: "499rem" })}>5</div>
      <div class={css({ width: "499rem" })}>6</div>
      <div class={css({ width: "499rem" })}>7</div>
    </section>
  );
});
