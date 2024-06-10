import type { ComponentProps, ValidComponent } from "solid-js";

export type DynamicBinds<T extends ValidComponent> = {
  component: T;
} & Omit<ComponentProps<T>, "children">;
