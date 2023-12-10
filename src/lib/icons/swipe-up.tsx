import { iconComponent } from "../icon";

const IconSwipeUp = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 16m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M12 12v-8" />
    <path d="M9 7l3 -3l3 3" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-swipe-up",
  },
);

export default IconSwipeUp;
