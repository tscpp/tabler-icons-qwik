import { iconComponent } from "../icon";

const IconArrowDownToArc = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3v12" />
    <path d="M16 11l-4 4l-4 -4" />
    <path d="M3 12a9 9 0 0 0 18 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-down-to-arc",
  },
);

export default IconArrowDownToArc;
