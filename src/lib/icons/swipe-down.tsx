import { iconComponent } from "../icon";

const IconSwipeDown = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" />
    <path d="M12 12v8" />
    <path d="M9 17l3 3l3 -3" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-swipe-down",
  },
);

export default IconSwipeDown;
