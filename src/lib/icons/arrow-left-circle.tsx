import { iconComponent } from "../icon";

const IconArrowLeftCircle = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17 12h-14" />
    <path d="M6 9l-3 3l3 3" />
    <path d="M19 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-left-circle",
  },
);

export default IconArrowLeftCircle;
