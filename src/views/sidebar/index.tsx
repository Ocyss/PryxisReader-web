import { Button } from "@/components/ui/button";
import { themes } from "@/data/themes";
import { ui } from "@/stores/ui";
import layout from "@/styles/layout.module.scss";
import { For } from "solid-js";

export function Sidebar() {
  return (
    <div class="h-full lg:drawer-open max-lg:!basis-0 lg:block">
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
              <Button class="btn" data-set-theme={item}>
                {item}
              </Button>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
