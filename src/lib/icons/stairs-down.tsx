import { iconComponent } from "../icon";

const IconStairsDown = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 21h-5v-5h-5v-5h-5v-5h-5" />
    <path d="M18 3v7" />
    <path d="M15 7l3 3l3 -3" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-stairs-down",
  },
);

export default IconStairsDown;
