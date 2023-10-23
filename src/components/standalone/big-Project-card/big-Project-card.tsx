/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { css, cx } from "~/styled-system/css";

export interface BigProjectCardProps {
  count?: string;
  imageURL?: string;
  subTitle?: string;
  title?: string;
  link?: string;
  // alt?:string
}

export const BigProjectCard = component$<BigProjectCardProps>((props) => {
  //   const count = useSignal(0);
  props.count;
  return (
    <article
      class={css({
        backgroundColor: "black",
        color: "main-textColor",
        paddingTop: "53rem",
        paddingInline: "9.5rem",
        paddingBottom: "10rem",
        width: { base: "504rem", md: "869rem" },

        // md: {
        //   minWidth: "869rem",
        // },

        borderRadius: "34rem",
        position: "relative",
      })}
    >
      {/* info side */}
      <div
        class={css({
          position: "relative",
          left: { base: "8rem", md: "16rem", lg: "23rem" },
          display: "flex",
          flexDirection: { base: " column", md: "row" },
          md: { alignItems: "end" },
          gap: { base: "17rem", lg: "47rem" },
          marginBottom: "28rem",
          //   backgroundColor: "pink",
        })}
      >
        {/* info wrapper */}
        <div
          class={css({
            display: "flex",
            flexDirection: "column",
            gap: "17rem",
            width: { base: "92%", md: "57%" },
            // backgroundColor: "pink",
          })}
        >
          <h2 class={cx("card-subtitle")}>
            {props.subTitle ? props.subTitle : "Renewable-energy"}
          </h2>
          <p
            class={css({
              fontFamily: "Poppins",
              fontSize: { base: "46rem", md: "54rem" },
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "127%" /* 58.42rem */,
              letterSpacing: "-4.14rem",
            })}
          >
            {props.title
              ? props.title
              : "Go green, save the planet and your bills"}{" "}
          </p>
        </div>

        <div class={css({ display: "flex", gap: "7rem" })}>
          <button
            class={css({
              position: "relative",
              backgroundColor: "orange-bgColor",
              height: { base: "75rem", lg: "128rem" },
              width: { base: "75rem", lg: "128rem" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "99rem",

              "& img": {
                position: "relative",
                height: "32rem",
                width: "32.5rem",
              },
            })}
          >
            <img src="images\arrow icon.svg" alt="menu svg icon" />
          </button>

          <button
            class={css({
              position: "relative",

              width: "160rem",
              // md: { height: "max-content" },
              lg: {
                height: "128rem",
                width: "128rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              color: "main-textColor",
              //   padding: "20.5rem 58.5rem",
              borderRadius: "100rem",
              border: "1rem solid",
              borderColor: "main-textColor",
              backgroundColor: "main-bgColor",

              fontSize: { base: "20rem", lg: "16rem" },
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "127%",
            })}
          >
            <a href={props.link}>Learn More</a>
          </button>
        </div>
      </div>
      {/* image side */}
      <div
        class={css({
          position: "relative",
          borderRadius: "23rem",
          width: "100%",
          height: "559rem",
          backgroundColor: "lime",
          overflow: "hidden",
          "& img": {
            position: "absolute",
            top: "0rem",
            left: "0rem",
            width: { base: "auto", md: "100%" },
            height: { base: "100%", md: "auto" },
          },
        })}
      >
        <img
          src={props.imageURL}
          alt={props.subTitle + " projects cover image"}
        />
      </div>
    </article>
  );
});
