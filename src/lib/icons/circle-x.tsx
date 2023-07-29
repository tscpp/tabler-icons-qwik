import { iconComponent } from "../icon";

const IconCircleX = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M10 10l4 4m0 -4l-4 4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-circle-x",
  },
);

export default IconCircleX;
