import type { Signal } from "@builder.io/qwik";
import {
  component$,
  createContextId,
  useContext,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import Fuse from "fuse.js";
// import { formContext } from "~/routes";
import { css } from "~/styled-system/css";
import { list } from "~/utils/lists";

export interface SearchComponentProps {
  count?: any;
}

export const formContext = createContextId<Signal<string>>(
  "site.search-context"
);

export const SearchComponent = component$<SearchComponentProps>((props) => {
  const searchValue = useSignal("");
  useContextProvider(formContext, searchValue);

  props.count;

  return (
    <section
      class={css({
        display: "flex",
        flexDirection: "column",
        gap: "24rem",
        width: { base: "439rem", md: "693rem" },
      })}
    >
      <h5
        class={css({
          fontSize: "23rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          letterSpacing: "-1.38rem",
        })}
      >
        Looking for a comfortable strategic and good place ?
      </h5>

      <SearchInput />

      <HistorySection />
    </section>
  );
});

const SearchInput = component$(() => {
  const x = useContext(formContext);

  // console.log(x.value);
  return (
    <>
      <div
        class={css({
          position: "relative",
          backgroundColor: "main-textColor",
          border: "1rem solid",
          borderColor: "main-bgColor",
          borderRadius: "48rem",
          height: "94rem",
        })}
      >
        <input
          onInput$={(ev: any) => {
            x.value = ev.target.value;
            // console.log(ev.target.value);
          }}
          class={css({
            position: "absolute",
            height: "100%",
            width: "100%",
            paddingBlock: "31.5rem",
            paddingLeft: "44rem",
            paddingRight: "18.5rem",
            borderRadius: "48rem",

            fontSize: "22rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            letterSpacing: "-1.32rem",
          })}
          placeholder="Try searching Mechanical engineering"
          type="text"
        />

        <div
          class={css({
            position: "absolute",
            borderRadius: "50rem",
            backgroundColor: "main-bgColor",
            height: "66rem",
            width: "66rem",
            right: "18rem",
            top: "14rem",
          })}
        ></div>
      </div>
    </>
  );
});

const HistorySection = component$(() => {
  const formValue = useContext(formContext);

  const fuseOptions = {
    threshold: 0.3,
    keys: [
      // "title",
      "service.title",
      "service.keywords",
    ],
  };

  const fuse = new Fuse(list, fuseOptions);
  console.log("xxxxxxxxx");
  // Change the pattern
  const searchPattern = formValue.value;
  const fuseSearch = fuse.search(searchPattern);

  // console.log(fuseSearch);

  console.log(formValue.value);

  const history = fuseSearch;

  return (
    <ul
      class={css({
        display: "flex",
        gap: "25rem",
      })}
    >
      {history.map((i) => (
        <li
          class={css({
            backgroundColor: "main-bgColor",
            listStyle: "none",
            width: "max-content",
            padding: "27.5rem",
            color: "main-textColor",
            borderRadius: "48rem",

            fontSize: "23rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            letterSpacing: "-2.3rem",
          })}
          key={Math.random()}
        >
          <a href={i.item.link}>{i.item.service.title}</a>
        </li>
      ))}
    </ul>
  );
});
