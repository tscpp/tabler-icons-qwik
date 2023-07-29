import { iconComponent } from "../icon";

const IconCircleTriangle = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 20l7 -12h-14z" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-circle-triangle",
  },
);

export default IconCircleTriangle;
