import { iconComponent } from "../icon";

const IconArrowLoopLeft = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M13 21v-13a4 4 0 1 1 4 4h-13" />
    <path d="M8 16l-4 -4l4 -4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-loop-left",
  },
);

export default IconArrowLoopLeft;
