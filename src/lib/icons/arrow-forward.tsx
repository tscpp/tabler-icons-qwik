import { iconComponent } from "../icon";

const IconArrowForward = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-forward",
  },
);

export default IconArrowForward;
