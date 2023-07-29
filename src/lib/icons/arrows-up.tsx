import { iconComponent } from "../icon";

const IconArrowsUp = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17 3l0 18" />
    <path d="M4 6l3 -3l3 3" />
    <path d="M20 6l-3 -3l-3 3" />
    <path d="M7 3l0 18" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrows-up",
  },
);

export default IconArrowsUp;
