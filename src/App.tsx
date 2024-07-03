import type { RouteSectionProps } from "@solidjs/router";
import type { Component } from "solid-js";

import {
  Resizable,
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/resizable";
import { setUi, ui } from "@/stores/ui";
import { Header } from "@/views/header";
import { Sidebar } from "@/views/sidebar";

const App: Component<RouteSectionProps> = (props) => {
  return (
    <div class="flex h-[100vh] flex-col bg-base-200 p-3 pt-0" id="app">
      <Header />
      <Resizable
        class="drawer flex h-full flex-row"
        orientation="horizontal"
        style={{ "padding-top": `${ui.header.heigth}px` }}
      >
        <ResizablePanel
          class="lg:drawer-open max-lg:!basis-0 lg:block"
          initialSize={ui.sidebar.width}
          minSize={0.2}
          onResize={(size) => {
            setUi("sidebar", "width", size);
          }}
        >
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel class="drawer-content contents flex-1 flex-row">
          {props.children}
        </ResizablePanel>
      </Resizable>
    </div>
  );
};

export default App;
