import { iconComponent } from "../icon";

const IconStairsUp = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 6h-5v5h-5v5h-5v5h-5" />
    <path d="M6 10v-7" />
    <path d="M3 6l3 -3l3 3" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-stairs-up",
  },
);

export default IconStairsUp;
