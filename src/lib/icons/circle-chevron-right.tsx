import { iconComponent } from "../icon";

const IconCircleChevronRight = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 9l3 3l-3 3" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-circle-chevron-right",
  },
);

export default IconCircleChevronRight;
