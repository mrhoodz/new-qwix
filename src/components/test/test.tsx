import { Slot, component$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface TestProps {
  textColor: string;
  backgroundColor: string;
  hhh?: any;
}

export const Test = component$<TestProps>((props) => {
  const count = useSignal(props.textColor);
  console.log(count.value, " kkkkkkk");
  return (
    <div
      style={{ backgroundColor: props.backgroundColor }}
      class={css({ color: props.textColor })}
      onClick$={(ev) => {
        console.log(ev.clientX, "pppppp");
      }}
    >
      {console.log(props.hhh)}
      <Slot></Slot> {props.hhh == undefined ? "jajsaj" : props.hhh}
      <h2 class={css({ color: "blue" })}></h2>
    </div>
  );
});
