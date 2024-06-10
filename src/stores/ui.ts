import { makePersisted } from "@solid-primitives/storage";
import { createStore } from "solid-js/store";

export const defaultUi = {
  content: { catalog: 0.3 },
  header: { heigth: 40 },
  sidebar: { width: 0.2 },
};

export const [ui, setUi] = makePersisted(createStore(defaultUi), {
  name: "store-ui",
});

export function updateUi(v: (state: typeof defaultUi) => void) {
  setUi(produce(v));
}
