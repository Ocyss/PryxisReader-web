import {
  Resizable,
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/resizable";
import { setUi, ui } from "@/stores/ui";
import layout from "@/styles/layout.module.scss";

import Catalog from "./catalog";

export default () => {
  return (
    <Resizable orientation="horizontal">
      <ResizablePanel
        class={`${layout.layoutScroll} bg-base`}
        initialSize={ui.content.catalog}
        minSize={0.2}
        onResize={(size) => {
          setUi("content", "catalog", size);
        }}
      >
        <Catalog />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel class={`${layout.layoutScroll} flex-1`}>
        <article class="prose">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </ResizablePanel>
    </Resizable>
  );
};
