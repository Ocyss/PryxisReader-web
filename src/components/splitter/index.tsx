import type { JSX } from "solid-js";
import type { Fn } from "solidjs-use";

import { useEventListener } from "solidjs-use";

import style from "./style.module.scss";

function defaultCurrent() {
  return {
    moving: false,
    startHeight: 0,
    startOffset: 0,
    startWidth: 0,
    startX: 0,
    startY: 0,
  };
}
export interface SplitterProps {
  children: JSX.Element;
  class?: string;
  directions?: "horizontal" | "vertical";
  max?: number | string;
  min?: number | string;
  onMoving?: (e: {
    current: ReturnType<typeof defaultCurrent>;
    event: MouseEvent;
    offset: number;
  }) => void;
  size?: number | string;
  splitterClass?: string;
}

function px2percent(numerator: number | string, denominator: number | string) {
  return (
    Number.parseFloat(numerator as string) /
    Number.parseFloat(denominator as string)
  );
}

export const Splitter: Component<SplitterProps> = (_props) => {
  const props = mergeProps(
    {
      directions: "horizontal",
      size: 0.5,
    },
    _props,
  );
  const isHorizontal = props.directions === "horizontal";
  const isPxSize = typeof props.size === "string";
  const current = createMutable(defaultCurrent());
  const [offset, setOffset] = createSignal(
    typeof props.size === "string" ? Number.parseFloat(props.size) : props.size,
  );
  const [ref, setRef] = createSignal<HTMLDivElement | null>(null);
  const [triggerSize, _setTriggerSize] = createSignal(0);
  const moveCleanups: Fn[] = [];

  function moving(e: MouseEvent) {
    if (!current.moving) return false;
    const newOffset = isHorizontal
      ? getOffset(
          current.startWidth,
          current.startOffset,
          current.startX,
          e.pageX,
        )
      : getOffset(
          current.startHeight,
          current.startOffset,
          current.startY,
          e.pageY,
        );
    setOffset(newOffset);
    props.onMoving &&
      props.onMoving({
        current: untrack(() => current),
        event: e,
        offset: newOffset,
      });
  }
  onCleanup(() => {
    moveCleanups.forEach((cleanup) => cleanup());
  });
  function moveEnd() {
    current.moving = false;
    moveCleanups.forEach((cleanup) => cleanup());
    moveCleanups.length = 0;
    document.body.style.cursor = "default";
  }

  function onTriggerMouseDown(e: MouseEvent) {
    e.preventDefault();
    current.moving = true;
    current.startX = e.pageX;
    current.startY = e.pageY;
    current.startWidth = ref()?.offsetWidth ?? 0;
    current.startHeight = ref()?.offsetHeight ?? 0;
    current.startOffset = untrack(offset);
    moveCleanups.push(
      useEventListener(window, "mousemove", moving),
      useEventListener(window, "touchmove", moving),
      useEventListener(window, "mouseup", moveEnd),
      useEventListener(window, "touchend", moveEnd),
      useEventListener(window, "contextmenu", moveEnd),
    );
    document.body.style.cursor = !isHorizontal ? "row-resize" : "col-resize";
  }

  function getOffset(
    startSize: number,
    startOffset: number,
    startPosition: number,
    currentPosition: number,
  ) {
    //  0 < minOffsetRatio, maxOffsetRatio <1
    const minOffsetRatio =
      typeof props.min === "string"
        ? px2percent(props.min, startSize)
        : props.min ?? 0;
    const maxOffsetRatio =
      typeof props.max === "string"
        ? px2percent(props.max, startSize)
        : props.max ?? 1;
    const ratio = 1;
    // const rtlRatio = rtlReverse ? -1 : 1;
    // ratio *= rtlRatio;
    let moveOffset = px2percent(
      startSize * startOffset + (currentPosition - startPosition) * ratio,
      startSize,
    );

    moveOffset = Math.max(moveOffset, minOffsetRatio);
    moveOffset = Math.min(moveOffset, maxOffsetRatio);
    return moveOffset;
  }

  // useResizeObserver(ref, (entries) => {
  //   const { contentRect } = entries[0];
  //   const newTriggerSize = contentRect[!isHorizontal ? "height" : "width"];
  //   setTriggerSize(newTriggerSize);
  // });

  const firstPaneSize = $memo(() => {
    const unit = isPxSize ? "px" : "%";
    if (!offset()) return `0${unit}`;
    const baseVal = isPxSize ? offset() : offset() * 100;
    return `calc(${baseVal}${unit} - ${triggerSize() / 2}px)`;
  });

  return (
    <>
      <div
        class={props.class}
        ref={setRef}
        style={{
          "flex-basis": firstPaneSize(),
        }}
      >
        {props.children}
      </div>

      <div
        class={`${isHorizontal ? style.splitterVert : style.splitterHorz} ${props.splitterClass}`}
        classList={{ [style.splitterMoving]: current.moving }}
        onMouseDown={onTriggerMouseDown}
      />
    </>
  );
};
