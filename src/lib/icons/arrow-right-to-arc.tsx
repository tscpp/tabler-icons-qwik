import { iconComponent } from "../icon";

const IconArrowRightToArc = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12h12" />
    <path d="M11 8l4 4l-4 4" />
    <path d="M12 21a9 9 0 0 0 0 -18" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-right-to-arc",
  },
);

export default IconArrowRightToArc;
