import { iconComponent } from "../icon";

const IconStackBack = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8l8 4l8 -4l-8 -4z" />
    <path d="M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z" fill="currentColor" />
    <path d="M8 10l-4 2l4 2m8 0l4 -2l-4 -2" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-stack-back",
  },
);

export default IconStackBack;
