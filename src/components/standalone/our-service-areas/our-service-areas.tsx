import { component$, useId } from "@builder.io/qwik";
import { css, cx } from "~/styled-system/css";

export interface OurServiceAreasProps {
  count?: any;
}

export const OurServiceAreas = component$<OurServiceAreasProps>((props) => {
  props.count;
  return (
    <section
      class={css({
        position: "relative",
        display: "flex",
        flexDirection: "row-reverse",
        flexWrap: "wrap",
        // width: "506rem",
        width: { base: "506rem", md: "1427rem" },

        gap: "58rem",
      })}
    >
      <ImageCover />

      <Areas />
    </section>
  );
});

const ImageCover = component$(() => {
  return (
    <div
      class={css({
        position: "relative",
        height: "580rem",
        width: { base: "100%", md: "838rem" },
        backgroundColor: "orange-bgColor",
        borderRadius: "48rem",
      })}
    ></div>
  );
});

const Areas = component$(() => {
  const yourAreas: AreaCardsProps[] = [
    {
      service: "Road Construction",
      metric: "1.1Km",
      location: "Rooisand Area",
      days: 26,
    },
    {
      service: "Solar Installation",
      metric: "1.1Km",
      location: "Rooisand Area",
      days: 26,
    },
    {
      service: "Mechanical Engineering",
      metric: "1.1Km",
      location: "Rooisand Area",
      days: 26,
    },
    {
      service: "GreenHouses",
      metric: "1.1Km",
      location: "Rooisand Area",
      days: 26,
    },
  ];

  const key = useId();

  return (
    <section
      class={css({
        // "& service-wrapper": {
        //   backgroundColor: "white",
        // },

        "& .service-wrapper:nth-child(1)": {
          backgroundColor: "#CBCBCB",
        },
      })}
    >
      {yourAreas.map((i) => {
        return (
          <>
            {console.log(key)}
            <AreaCards
              key={key}
              service={i.service}
              metric={i.metric}
              location={i.location}
              days={i.days}
            />
          </>
        );
      })}
    </section>
  );
});

interface AreaCardsProps {
  service: string;
  metric: any;
  location: string;
  days: number;
}

const AreaCards = component$<AreaCardsProps>((props) => {
  //   const count = useSignal(0);
  props.service;
  //   cx
  return (
    <section
      class={cx(
        "service-wrapper",
        css({
          position: "relative",
          padding: "30rem",
          paddingLeft: "42rem",
          backgroundColor: "main-textColor",

          display: "flex",
          flexDirection: "column",
          gap: "22rem",
          borderRadius: "24rem",
        })
      )}
    >
      <h4
        class={css({
          position: "relative",
          fontSize: "36rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "107%" /* 48.26rem */,
          letterSpacing: "-0.95rem",

          _after: {
            content: '"  "',
            position: "absolute",
            top: "-2rem",
            left: "-18rem",
            height: "107%",
            width: "4rem",
            backgroundColor: "main-bgColor",
          },
        })}
      >
        {props.service}
      </h4>

      <ul
        class={css({
          fontSize: "22rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "147.5%" /* 48.26rem */,
          letterSpacing: "-1.452rem",

          display: "flex",
          gap: "18rem",

          listStyle: "none",

          "& li": {
            position: "relative",
          },
        })}
      >
        <li
          class={css({
            fontSize: "23rem",
          })}
        >
          {props.metric}
        </li>
        <li
          class={css({
            position: "relative",
            _after: {
              content: '" "',
              position: "absolute",
              top: "47%",
              left: "-12rem",
              height: "4rem",
              width: "4rem",
              backgroundColor: "main-bgColor",
              borderRadius: "30rem",
            },
            _before: {
              content: '" "',
              position: "absolute",
              top: "47%",

              right: "-12rem",
              height: "4rem",
              width: "4rem",
              backgroundColor: "main-bgColor",
              borderRadius: "30rem",
            },
          })}
        >
          {props.location}
        </li>
        <li>{props.days} days</li>
      </ul>
    </section>
  );
});
