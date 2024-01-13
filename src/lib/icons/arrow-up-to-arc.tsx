import { iconComponent } from "../icon";

const IconArrowUpToArc = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21v-12" />
    <path d="M8 13l4 -4l4 4" />
    <path d="M21 12a9 9 0 0 0 -18 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-up-to-arc",
  },
);

export default IconArrowUpToArc;
