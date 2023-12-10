import { iconComponent } from "../icon";

const IconSwipeLeft = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20 12a4 4 0 1 0 -8 0a4 4 0 0 0 8 0z" />
    <path d="M12 12h-8" />
    <path d="M7 15l-3 -3l3 -3" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-swipe-left",
  },
);

export default IconSwipeLeft;
