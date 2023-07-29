import { iconComponent } from "../icon";

const IconArrowsDown = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 21l0 -18" />
    <path d="M20 18l-3 3l-3 -3" />
    <path d="M4 18l3 3l3 -3" />
    <path d="M17 21l0 -18" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrows-down",
  },
);

export default IconArrowsDown;
