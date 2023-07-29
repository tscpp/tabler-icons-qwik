import { iconComponent } from "../icon";

const IconDotsDiagonal = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M17 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-dots-diagonal",
  },
);

export default IconDotsDiagonal;
