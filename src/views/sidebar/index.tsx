import { Splitter } from "@/components/splitter";
import { themes } from "@/data/themes";
import { setUi, ui } from "@/stores/ui";
import layout from "@/styles/layout.module.scss";
import { For } from "solid-js";

export function Sidebar() {
  // const { width } = useWindowSize();
  // const component = $memo(
  //   (): DynamicBinds<typeof Drawer> | DynamicBinds<typeof Splitter> => {
  //     if (width() < 1100) {
  //       return { component: Drawer, draweId: "sidebar" };
  //     }
  //     return {
  //       component: Splitter,
  //       max: 0.6,
  //       min: 0.1,
  //       onMoving: ({ offset }) => {
  //         setUi("sidebar", "width", offset);
  //       },
  //       size: ui.sidebar.width,
  //     };
  //   },
  // );
  return (
    <Splitter
      class="lg:drawer-open max-lg:!basis-0 lg:block"
      max={0.4}
      min={0.1}
      onMoving={({ offset }) => {
        setUi("sidebar", "width", offset);
      }}
      size={ui.sidebar.width}
      splitterClass="max-lg:hidden"
    >
      <input class="drawer-toggle" id="sidebarDrawer" type="checkbox" />
      <div class="drawer-side z-50 lg:relative lg:size-full lg:justify-stretch">
        <label
          aria-label="close sidebar"
          class="drawer-overlay"
          for="sidebarDrawer"
        />

        <div
          class={`${layout.layoutScroll} flex h-full w-80 flex-col bg-base-200 lg:w-auto lg:!pt-0`}
          style={{ "padding-top": `${ui.header.heigth}px ` }}
        >
          <For each={themes} fallback={<div>Loading...</div>}>
            {(item) => (
              <button
                class="btn"
                data-act-class="ACTIVECLASS"
                data-set-theme={item}
              >
                {item}
              </button>
            )}
          </For>
        </div>
      </div>
    </Splitter>
  );
}
