import { iconComponent } from "../icon";

const IconBorderCornerRounded = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 20v-10a6 6 0 0 1 6 -6h10" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-border-corner-rounded",
  },
);

export default IconBorderCornerRounded;
