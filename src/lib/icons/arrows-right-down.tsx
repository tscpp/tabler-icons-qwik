import { iconComponent } from "../icon";

const IconArrowsRightDown = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 17l4 4l4 -4" />
    <path d="M7 21v-11a3 3 0 0 1 3 -3h11" />
    <path d="M17 11l4 -4l-4 -4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrows-right-down",
  },
);

export default IconArrowsRightDown;
