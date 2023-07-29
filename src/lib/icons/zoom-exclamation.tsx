import { iconComponent } from "../icon";

const IconZoomExclamation = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M21 21l-6 -6" />
    <path d="M10 13v.01" />
    <path d="M10 7v3" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-zoom-exclamation",
  },
);

export default IconZoomExclamation;
