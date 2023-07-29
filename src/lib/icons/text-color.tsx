import { iconComponent } from "../icon";

const IconTextColor = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 15v-7a3 3 0 0 1 6 0v7" />
    <path d="M9 11h6" />
    <path d="M5 19h14" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-text-color",
  },
);

export default IconTextColor;
