import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface TestimonialCardProps {
  variant?: string[];
}

export const TestimonialCard = component$<TestimonialCardProps>((props) => {
  props.variant;
  //   const count = useSignal(0);
  return (
    <article
      class={css({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: { base: "505rem", md: "1480rem" },
        gap: { base: "38rem", md: "92rem" },

        marginInline: "auto",
        marginTop: "210rem",
      })}
    >
      {/* header */}
      <section
        class={css({
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "24rem",
        })}
      >
        <h4
          class={css({
            fontSize: "62rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "118%" /* 73.16px */,
            letterSpacing: "-4.96rem",
          })}
        >
          Testimonial
        </h4>

        <div
          class={css({
            position: "relative",
            display: "flex",
            gap: "14rem",

            "& button": {
              position: "relative",
              display: "flex",
              width: "142rem",
              height: "82rem",
              border: "2rem solid",

              borderRadius: "40rem",
              justifyContent: "center",
              alignItems: "center",
            },
          })}
        >
          <button
            class={css({
              borderColor: "main-textColor",
              backgroundColor: "main-bgColor",
            })}
          >
            +{" "}
          </button>
          <button
            class={css({
              borderColor: "main-bgColor",
              backgroundColor: "main-textColor",
            })}
          >
            -{" "}
          </button>
        </div>
      </section>

      {/* body */}

      <section>
        <p
          class={css({
            fontSize: { base: "33rem", md: "53rem" },
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "132%" /* 43.56px */,
            letterSpacing: { base: "-2.64rem", md: "-4.64rem" },
          })}
        >
          "Neoloprojects made our dream of sustainable energy a reality. Their
          expertise and dedication to green energy solutions were truly
          outstanding.
        </p>
      </section>

      {/* footer */}
      <section
        class={css({
          //   backgroundColor: "orange",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "17rem",
          justifyContent: "space-between",
        })}
      >
        {/* reviewer details */}
        <div
          class={css({
            position: "relative",

            display: "flex",
            // justifyContent: "space-between",
            gap: "35rem",
          })}
        >
          {/* avatar */}
          <div
            class={css({
              position: "relative",
              height: "126rem",
              width: "126rem",
              backgroundColor: "lime",
              borderRadius: "90rem",
              overflow: "hidden",

              "& img": {
                position: "relative",
                height: "32rem",
                width: "32.5rem",
              },
            })}
          >
            image goes here
          </div>

          {/* details */}
          <div
            class={css({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontSize: "53rem",
              gap: "12rem",
              //   width: "300rem",
              fontStyle: "normal",
              fontWeight: "500",
              //   lineHeight: "132%",
              //   backgroundColor: "red",

              /* 69.96px */
              //   letterSpacing: "-4.24rem",
            })}
          >
            <h5
              class={css({
                fontSize: "31rem",
              })}
            >
              Lot Mucavele
            </h5>
            <p
              class={css({
                fontSize: "24rem",
              })}
            >
              5STAR ENGINEERING
            </p>
          </div>
        </div>
        {/* review categories */}

        <div
          class={css({
            position: "relative",
            // backgroundColor: "pink",
            display: "flex",
            gap: "7rem",
            alignItems: "center",
            width: "max-content",
          })}
        >
          <button
            class={css({
              position: "relative",
              //   backgroundColor: "red",
              width: "78rem",
              height: "65rem",
              borderRadius: "48rem",
              border: "2rem solid",
              borderColor: "main-bgColor",
            })}
          >
            4.5
          </button>

          <button
            class={css({
              position: "relative",
              padding: "19rem 22rem",
              borderRadius: "48rem",
              backgroundColor: "main-bgColor",
              color: "main-textColor",

              fontSize: "19rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "127%" /* 24.13rem */,
              letterSpacing: "-0.475rem",
            })}
          >
            <a href="/services/renewable-energy">Renewable Energy</a>
          </button>
        </div>
      </section>
    </article>
  );
});
