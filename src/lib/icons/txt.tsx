import { iconComponent } from "../icon";

const IconTxt = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 8h4" />
    <path d="M5 8v8" />
    <path d="M17 8h4" />
    <path d="M19 8v8" />
    <path d="M10 8l4 8" />
    <path d="M10 16l4 -8" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-txt",
  },
);

export default IconTxt;
