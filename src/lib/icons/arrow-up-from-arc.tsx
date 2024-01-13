import { iconComponent } from "../icon";

const IconArrowUpFromArc = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 9v12" />
    <path d="M8 17l4 4l4 -4" />
    <path d="M21 12a9 9 0 0 0 -18 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-up-from-arc",
  },
);

export default IconArrowUpFromArc;
