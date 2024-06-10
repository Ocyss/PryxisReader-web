import { ui } from "@/stores/ui";

export function Header() {
  return (
    <header
      class="fixed z-10 flex items-center justify-between"
      style={{
        height: `${ui.header.heigth}px`,
      }}
    >
      <div>
        <div class="flex-none lg:hidden">
          <label
            aria-label="open sidebar"
            class="btn btn-square btn-ghost"
            for="sidebarDrawer"
          >
            <svg
              class="inline-block h-6 w-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </label>
        </div>
        {/* <button
          class="btn btn-primary"
          onClick={() => {
            document.getElementById("sidebarDrawer")?.click();
          }}
        >
          Open drawer
        </button> */}
      </div>
    </header>
  );
}
