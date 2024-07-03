import routes from "@/routes";
import { Router } from "@solidjs/router";
import "solid-devtools";
import { onMount } from "solid-js";
import { render } from "solid-js/web";
import { themeChange } from "theme-change";

import App from "./App";
import "./app.css";

onMount(() => {
  themeChange();
});

render(
  () => <Router root={App}>{routes}</Router>,
  document.getElementById("root") as HTMLElement,
);
