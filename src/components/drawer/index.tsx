import type { JSX } from "solid-js";

export const Drawer: Component<{
  children: JSX.Element;
  draweId: string;
}> = (props) => {
  return (
    <>
      <input class="drawer-toggle" id={props.draweId} type="checkbox" />
      <div class="drawer-side w-[38%]">
        <label
          aria-label="close sidebar"
          class="drawer-overlay"
          for={props.draweId}
        />
        {props.children}
      </div>
    </>
  );
};
