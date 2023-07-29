import { iconComponent } from "../icon";

const IconArrowsHorizontal = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 8l-4 4l4 4" />
    <path d="M17 8l4 4l-4 4" />
    <path d="M3 12l18 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrows-horizontal",
  },
);

export default IconArrowsHorizontal;
