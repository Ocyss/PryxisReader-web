import type { RouteDefinition } from "@solidjs/router";

import Content from "@/pages/content";

const routes: RouteDefinition[] = [
  {
    component: Content,
    path: ["/", "/content/:id"],
  },
];

export default routes;
