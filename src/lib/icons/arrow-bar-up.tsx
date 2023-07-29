import { iconComponent } from "../icon";

const IconArrowBarUp = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 4l0 10" />
    <path d="M12 4l4 4" />
    <path d="M12 4l-4 4" />
    <path d="M4 20l16 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-bar-up",
  },
);

export default IconArrowBarUp;
