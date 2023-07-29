import { iconComponent } from "../icon";

const IconArrowsUpLeft = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M21 7l-4 -4l-4 4" />
    <path d="M17 3v11a3 3 0 0 1 -3 3h-11" />
    <path d="M7 13l-4 4l4 4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrows-up-left",
  },
);

export default IconArrowsUpLeft;
