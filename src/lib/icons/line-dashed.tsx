import { iconComponent } from "../icon";

const IconLineDashed = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12h2" />
    <path d="M17 12h2" />
    <path d="M11 12h2" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-line-dashed",
  },
);

export default IconLineDashed;
