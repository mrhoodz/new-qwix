/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { ArrowIcon } from "~/components/icons/icons";
import { css, cx } from "~/styled-system/css";

export interface ProjectOverviewCardProps {
  variant: string[];
  title?: string;
  location?: string;
  size?: string;
  year?: string;
  body?: string;
}

interface ProjectCoverProps {
  title?: string;
  location?: string;
  size?: string;
  year?: string;
  body?: string;
}

export const ProjectOverviewCard = component$<ProjectOverviewCardProps>(
  (props) => {
    //   const count = useSignal(0);
    const variant: any = props.variant;

    console.log(props.variant as any, " 2132312");
    console.log(props.variant[0], " hhhhhhhhhhhhh");
    console.log(props.variant[1], " ffffffffffff");
    return (
      <article
        class={css({
          position: "relative",

          top: "100rem",
          background:
            variant == "Primary"
              ? " linear-gradient(90deg, #F98701 0%, #B12323 39.94%, #1F2CA0 100%)"
              : "white",

          color: "main-textColor",
          maxWidth: "504rem",
          //   minHeight: "547rem",
          borderRadius: "31rem",
          paddingTop: variant == "Primary" ? "11rem" : "0rem",
          paddingBottom: variant == "Primary" ? "11rem" : "0rem",
          //   paddingInline: "23.5rem",

          zIndex: "2",
        })}
      >
        {variant == "Primary" ? (
          <ProjectsCover
            title={props.title}
            location={props.location}
            size={props.size}
            body={props.body}
            year={props.year}
          />
        ) : (
          <ProjectsPicture />
        )}
      </article>
    );
  }
);

{
  /* <div
class={css({
  backgroundColor: "pink.600",
  position: "absolute",
  width: "100%",
  height: "130%",
  top: "0",
  left: "0",
  zIndex: "1",
})}
>
d
</div> */
}

export const ProjectsCover = component$<ProjectCoverProps>((props) => {
  return (
    <div
      class={css({
        position: "relative",

        backgroundColor: "main-bgColor",
        color: "main-textColor",
        maxWidth: "100%",
        // height: "747rem",
        borderRadius: "38rem",
        paddingTop: "24rem",
        paddingInline: "23.5rem",
        paddingBottom: "63.5rem",
      })}
    >
      <section
        class={css({
          // color: "red",
          position: "relative",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexWrap: "wrap",
          gap: "9rem",
          flexDirection: "row",
          //   backgroundColor: "purple.600",
          //   height: "300rem",
          marginBottom: "50rem",

          "& .button": {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "main-textColor",
            border: "1rem solid",
            borderColor: "main-textColor",
            borderRadius: "60rem",
            height: "93rem",

            fontSize: "20rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            letterSpacing: "-1.2rem",
          },
        })}
      >
        {/* sideA */}
        <div
          class={css({
            // backgroundColor: "lime",
            display: "flex",
            flexDirection: "row",
          })}
        >
          <div
            class={cx(
              "button",
              css({
                // backgroundColor: "red",
                paddingInline: "37.5rem",
              })
            )}
          >
            View
          </div>
          <div
            class={cx(
              "button",
              css({
                // backgroundColor: "pink",
                paddingInline: "37.5rem",
              })
            )}
          >
            Learn More
          </div>
        </div>
        {/* sideB */}
        <div
          class={cx(
            css({
              position: "relative",
              height: "123rem",
              width: "123rem",
              //   display: "inline-block",
              //   alignItems: "flex-start",
              //   justifyContent: "flex-start",
              //   backgroundColor: "blue",
              borderRadius: "50rem",

              "& svg": {
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: " translate(-50%,-50%) ",
              },

              //   overflow: "hidden",
            })
            // "button"
          )}
        >
          <ArrowIcon />
        </div>
      </section>

      <div
        class={css({
          //   backgroundColor: "lime",
          display: "flex",
          flexDirection: "column",
          gap: "36rem",
        })}
      >
        <h3
          class={css({
            fontSize: "36rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "127%" /* 45.72rem */,
            letterSpacing: "-0.54rem",
            //   marginBottom: "36rem",
          })}
        >
          {props.title}
        </h3>
        <ul
          class={css({
            display: "flex",
            flexDirection: "column",
            gap: "36rem",
            fontSize: "24rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            letterSpacing: "-1.68rem",
            //   backgroundColor: "lime",
            //   marginBottom: "36rem",

            "& li": {
              display: "flex",
              flexDirection: "row",
              gap: "17rem",
            },

            "& li > h4 ": {
              //   color: "red",
              fontSize: "23rem",
            },
            "& li > p ": {
              //   color: "red",
              fontSize: "24rem",
            },
          })}
        >
          <li>
            <h4>Location</h4> <p>{props.location}</p>
          </li>
          <li>
            <h4>Size</h4> <p>{props.size}</p>
          </li>{" "}
          <li>
            <h4>Year</h4> <p>{props.year}</p>
          </li>{" "}
        </ul>
        <section
          class={css({
            fontSize: "24rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "142.5%" /* 34.2rem */,
            letterSpacing: "-2.16rem",
          })}
        >
          {props.body}
        </section>
      </div>

      {/* wrapper border */}
    </div>
  );
});

export const ProjectsPicture = component$(() => {
  return (
    <div
      class={css({
        position: "relative",

        // backgroundColor: "main-bgColor",
        color: "main-textColor",
        maxWidth: "504rem",
        // height: "747rem",
        borderRadius: "38rem",
        // paddingTop: "24rem",
        // paddingInline: "23.5rem",
        paddingBottom: "63.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "31rem",
      })}
    >
      {/* image */}
      <div
        class={css({
          position: "relative",
          backgroundColor: "lime",
          borderRadius: "37rem 37rem 0rem 0rem ",
          width: "100%",
          height: " 513rem",
        })}
      ></div>

      {/* details */}

      <div
        class={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <h3
          class={css({
            color: "main-bgColor",

            fontSize: "31rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "127%" /* 39.37px */,
            letterSpacing: "-0.155rem",
          })}
        >
          Renewable Energy
        </h3>
        <button
          class={css({
            backgroundColor: "main-bgColor",
            color: "main-textColor",
            position: "relative",
            borderRadius: "38rem",
            height: "38rem",
            width: "134rem",
            display: "flex",
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
        </button>{" "}
      </div>
    </div>
  );
});
