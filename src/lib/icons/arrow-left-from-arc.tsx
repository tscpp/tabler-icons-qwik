import { iconComponent } from "../icon";

const IconArrowLeftFromArc = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 12h12" />
    <path d="M17 16l4 -4l-4 -4" />
    <path d="M12 3a9 9 0 1 0 0 18" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-left-from-arc",
  },
);

export default IconArrowLeftFromArc;
