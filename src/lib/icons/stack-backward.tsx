import { iconComponent } from "../icon";

const IconStackBackward = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 12l6 -3l-8 -4l-8 4l6 3" />
    <path d="M10 12l-6 3l8 4l8 -4l-6 -3l-2 1z" fill="currentColor" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-stack-backward",
  },
);

export default IconStackBackward;
