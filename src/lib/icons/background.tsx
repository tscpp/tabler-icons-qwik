import { iconComponent } from "../icon";

const IconBackground = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8l4 -4" />
    <path d="M14 4l-10 10" />
    <path d="M4 20l16 -16" />
    <path d="M20 10l-10 10" />
    <path d="M20 16l-4 4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-background",
  },
);

export default IconBackground;
