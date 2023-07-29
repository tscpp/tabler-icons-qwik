import { iconComponent } from "../icon";

const IconStack = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
    <path d="M4 14l8 4l8 -4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-stack",
  },
);

export default IconStack;
