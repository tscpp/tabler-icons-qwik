import { iconComponent } from "../icon";

const IconArrowLeftToArc = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M21 12h-12" />
    <path d="M13 16l-4 -4l4 -4" />
    <path d="M12 3a9 9 0 1 0 0 18" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-left-to-arc",
  },
);

export default IconArrowLeftToArc;
