import { iconComponent } from "../icon";

const IconArrowBarToUp = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 10l0 10" />
    <path d="M12 10l4 4" />
    <path d="M12 10l-4 4" />
    <path d="M4 4l16 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-bar-to-up",
  },
);

export default IconArrowBarToUp;
