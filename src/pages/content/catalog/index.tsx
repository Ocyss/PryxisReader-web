import { Splitter } from "@/components/splitter";
import { setUi, ui } from "@/stores/ui";
import layout from "@/styles/layout.module.scss";

export default () => {
  return (
    <Splitter
      max={0.6}
      onMoving={({ offset }) => {
        setUi("content", "catalog", offset);
      }}
      size={ui.content.catalog}
    >
      <div class={`${layout.layoutScroll} bg-base`}>
        <div style={{ height: "3000px" }}>catalog</div>
      </div>
    </Splitter>
  );
};
