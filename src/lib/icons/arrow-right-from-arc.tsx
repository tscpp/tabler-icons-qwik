import { iconComponent } from "../icon";

const IconArrowRightFromArc = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 12h-12" />
    <path d="M7 8l-4 4l4 4" />
    <path d="M12 21a9 9 0 0 0 0 -18" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-right-from-arc",
  },
);

export default IconArrowRightFromArc;
