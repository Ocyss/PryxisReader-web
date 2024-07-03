import type { DynamicProps, HandleProps, RootProps } from "@corvu/resizable";
import type { ValidComponent } from "solid-js";

import { cn } from "@/lib/utils";
import ResizablePrimitive from "@corvu/resizable";
import { Show, splitProps } from "solid-js";

type ResizableProps = { class?: string } & RootProps;

const Resizable = <T extends ValidComponent = "div">(
  props: DynamicProps<T, ResizableProps>,
) => {
  const [, rest] = splitProps(props as ResizableProps, ["class"]);
  return (
    <ResizablePrimitive
      class={cn(
        "flex size-full data-[orientation=vertical]:flex-col",
        props.class,
      )}
      {...rest}
    />
  );
};

const ResizablePanel = ResizablePrimitive.Panel;

type ResizableHandleProps = {
  class?: string;
  withHandle?: boolean;
} & HandleProps;

const ResizableHandle = <T extends ValidComponent = "div">(
  props: DynamicProps<T, ResizableHandleProps>,
) => {
  const [, rest] = splitProps(props as ResizableHandleProps, [
    "class",
    "withHandle",
  ]);
  return (
    <ResizablePrimitive.Handle
      class={cn(
        "bg-border focus-visible:ring-ring relative flex w-px shrink-0 items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2 data-[orientation=vertical]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90",
        props.class,
      )}
      {...rest}
    >
      <Show when={props.withHandle}>
        <div class="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-sm border">
          <svg
            class="size-2.5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </div>
      </Show>
    </ResizablePrimitive.Handle>
  );
};

export { Resizable, ResizableHandle, ResizablePanel };
