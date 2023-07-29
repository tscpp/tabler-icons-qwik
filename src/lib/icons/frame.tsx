import { iconComponent } from "../icon";

const IconFrame = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 7l16 0" />
    <path d="M4 17l16 0" />
    <path d="M7 4l0 16" />
    <path d="M17 4l0 16" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-frame",
  },
);

export default IconFrame;
