import { iconComponent } from "../icon";

const IconArrowsMinimize = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 9l4 0l0 -4" />
    <path d="M3 3l6 6" />
    <path d="M5 15l4 0l0 4" />
    <path d="M3 21l6 -6" />
    <path d="M19 9l-4 0l0 -4" />
    <path d="M15 9l6 -6" />
    <path d="M19 15l-4 0l0 4" />
    <path d="M15 15l6 6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrows-minimize",
  },
);

export default IconArrowsMinimize;
