/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface MiniServiceCardProps {
  variant?: string;
  imageURL?: string;
  subTitle?: string;
  title?: string;
  link?: string;
}

export const MiniServiceCard = component$<MiniServiceCardProps>((props) => {
  //   const count = useSignal(0);
  props.variant;
  return (
    <article
      class={css({
        position: "relative",
        padding: props.variant == "1" ? "16rem" : "10rem",
        borderRadius: "35rem",
        backgroundColor: "main-bgColor",
        display: "flex",
        flexDirection: "column",
        gap: "21rem",
        width: "557rem",
      })}
    >
      {/* image side */}
      <div
        class={css({
          position: "relative",
          height: props.variant == "3" ? "330rem" : "395rem",
          width: "100%",
          // backgroundColor: "lime",
          borderRadius: "18rem",
          overflow: "hidden",

          "& img": {
            position: "relative",
            width: "100%",
            height: "auto",
          },
        })}
      >
        <img
          src={props.imageURL}
          alt={props.subTitle + " projects cover image"}
        />{" "}
      </div>

      {/* info wrapper */}
      {props.variant == "1" ? (
        <div
          class={css({
            display: "flex",
            paddingLeft: "7rem",
            gap: "10rem",
            color: "main-textColor",
            alignItems: "center",
            marginBottom: "24rem",
            // backgroundColor: "pink",
          })}
        >
          {/* info side */}

          <div
            class={css({
              maxWidth: "75%",
              display: "flex",
              // backgroundColor: "orange",
              flexDirection: "column",
              gap: "5rem",
            })}
          >
            {"  "}
            <h2
              class={css({
                fontSize: "15rem",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "93.5%" /* 23.375rem */,
                letterSpacing: "-1.38rem",
              })}
            >
              {props.subTitle ? props.subTitle : "Road Construction"}
            </h2>
            <p
              class={css({
                //   leadingTrim: "both",
                //   textEdge: "cap",
                fontFamily: "Poppins",
                fontSize: "25rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "93.5%" /* 23.375rem */,
                letterSpacing: "-2.25rem",
              })}
            >
              {/* Mainatainance and Construction at a level like no other */}

              {props.title
                ? props.title
                : "Mainatainance and Construction at a level like no other"}
            </p>
          </div>

          <button
            class={css({
              backgroundColor: "main-textColor",
              color: "main-bgColor",
              position: "relative",
              borderRadius: "38rem",
              height: "38rem",
              width: "134rem",
              display: "flex",
              paddingTop: "2rem",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            <div class={css({ display: "flex", gap: "7rem" })}>
              <span
                class={css({
                  fontFamily: "Poppins",
                  fontSize: "16rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  // lineHeight: "93.5%" /* 14.96rem */,
                  letterSpacing: "-0.48rem",
                })}
              >
                Details
              </span>
              {/* cirle wrapper for icon */}
              <div
                class={css({
                  position: "relative",
                  height: "20rem",
                  width: "20rem",
                  backgroundColor: "main-bgColor",
                  borderRadius: "30rem",
                })}
              ></div>{" "}
            </div>
          </button>
        </div>
      ) : (
        <></>
      )}
    </article>
  );
});
