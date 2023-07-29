import { iconComponent } from "../icon";

const IconArrowBarToLeft = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 12l10 0" />
    <path d="M10 12l4 4" />
    <path d="M10 12l4 -4" />
    <path d="M4 4l0 16" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-bar-to-left",
  },
);

export default IconArrowBarToLeft;
