import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface ContactUsHeroProps {
  count?: any;
}

export const ContactUsHero = component$<ContactUsHeroProps>((props) => {
  props.count;

  return (
    <section
      class={css({
        position: "relative",
        width: "100%",
        height: "1009rem",
        backgroundColor: "rebeccapurple",
        color: "main-textColor",
      })}
    >
      <HeroText />

      <MapSection />
    </section>
  );
});

const HeroText = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        width: "811rem",
        display: "flex",
        flexDirection: "column",
        gap: "9rem",

        left: "222rem",
        top: "301rem",

        fontStyle: "normal",
        fontWeight: "600",
      })}
    >
      <h2
        class={css({
          fontSize: "27rem",

          lineHeight: "normal",
        })}
      >
        Renewable Energy
      </h2>
      <h1
        class={css({
          fontSize: "110rem",

          lineHeight: "115.5%",
          letterSpacing: "-9.9rem",
        })}
      >
        Let's Start Your Project Journey
      </h1>

      <section
        class={css({
          marginTop: "84rem",
          display: "flex",
          alignItems: "center",
          gap: "46rem",
        })}
      >
        <div
          class={css({
            position: "relative",
            backgroundColor: "orange-bgColor",
            borderRadius: "70rem",
            height: "128rem",
            width: "128rem",
          })}
        >
          arrow
        </div>
        <div
          class={css({
            border: "3rem solid",
            borderColor: "main-textColor",
            padding: "32rem 36rem",

            fontSize: "24rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "127%" /* 30.48rem */,
            letterSpacing: "-0.6rem",
            borderRadius: "49rem",
          })}
        >
          career
        </div>
      </section>
    </section>
  );
});

const MapSection = component$(() => {
  return (
    <div
      class={css({
        position: "absolute",
        top: "299rem",
        right: "120rem",
      })}
    >
      <section
        class={css({
          position: "relative",
          backgroundColor: "main-bgColor",
          borderRadius: "40rem",
          padding: "11rem",

          fontStyle: "normal",
          fontWeight: "600",
          display: "flex",
          flexDirection: "column",
          gap: "10rem",

          width: "605rem",
        })}
      >
        {/* info side */}
        <div
          class={css({
            position: "relative",
            marginLeft: "25rem",
            paddingRight: "55rem",
            display: "flex",
            flexDirection: "column",
            gap: "15rem",
          })}
        >
          <ul
            class={css({
              display: "flex",
              gap: "66rem",
              marginTop: "17rem",
              marginLeft: "15rem",

              "& li": {
                position: "relative",

                listStyle: "none",
                fontSize: "24rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal" /* 25.4rem */,

                _before: {
                  content: '" "',
                  position: "absolute",
                  height: "10rem",
                  width: "10rem",
                  backgroundColor: "lime",
                  borderRadius: "20rem",
                  left: "-25rem",
                  top: "12rem",
                },
              },
            })}
          >
            <li>Whatsapp</li>
            <li>Address</li>
          </ul>

          <div
            class={css({
              display: "flex",

              justifyContent: "space-between",
              alignItems: "center",
            })}
          >
            <h4
              class={css({
                position: "relative",
                width: "289rem",
                fontSize: "41rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "127%" /* 25.4rem */,
                letterSpacing: "-3.69rem",
              })}
            >
              Have an idea lets get in touch
            </h4>

            <button
              class={css({
                position: "relative",
                padding: "20.5rem 60rem",
                // height:"77rem",
                // width:"213rem",

                backgroundColor: "main-bgColor",
                color: "main-textColor",
                border: "1rem solid",
                borderColor: "main-textColor",
                borderRadius: "60rem",

                fontSize: "20rem",
                fontStyle: "normal",
                fontWeight: "600",
                letterSpacing: "-0.5rem",
              })}
            >
              Email Us
            </button>
          </div>
        </div>

        {/* map image */}

        <div
          class={css({
            position: "relative",
            backgroundColor: "lime",
            borderRadius: "38rem",
            height: "401rem",
          })}
        ></div>
      </section>
    </div>
  );
});
