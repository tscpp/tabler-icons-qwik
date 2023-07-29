import { iconComponent } from "../icon";

const IconChevronsLeft = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 7l-5 5l5 5" />
    <path d="M17 7l-5 5l5 5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-chevrons-left",
  },
);

export default IconChevronsLeft;
