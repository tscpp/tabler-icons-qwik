import { iconComponent } from "../icon";

const IconZoomCheck = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
    <path d="M7 10l2 2l4 -4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-zoom-check",
  },
);

export default IconZoomCheck;
