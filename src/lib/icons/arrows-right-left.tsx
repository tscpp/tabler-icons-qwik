import { iconComponent } from "../icon";

const IconArrowsRightLeft = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M21 7l-18 0" />
    <path d="M18 10l3 -3l-3 -3" />
    <path d="M6 20l-3 -3l3 -3" />
    <path d="M3 17l18 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrows-right-left",
  },
);

export default IconArrowsRightLeft;
