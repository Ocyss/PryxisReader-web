import type { RouteSectionProps } from "@solidjs/router";
import type { Component } from "solid-js";

import { ui } from "@/stores/ui";
import { Header } from "@/views/header";
import { Sidebar } from "@/views/sidebar";

const App: Component<RouteSectionProps> = (props) => {
  return (
    <div class="flex h-[100vh] flex-col bg-base-200 p-3 pt-0" id="app">
      <Header />
      <div
        class="drawer flex h-full flex-row"
        style={{ "padding-top": `${ui.header.heigth}px` }}
      >
        <Sidebar />
        <div class="drawer-content contents flex-1 flex-row">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default App;
