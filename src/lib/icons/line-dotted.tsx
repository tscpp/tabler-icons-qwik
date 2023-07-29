import { iconComponent } from "../icon";

const IconLineDotted = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 12v.01" />
    <path d="M8 12v.01" />
    <path d="M12 12v.01" />
    <path d="M16 12v.01" />
    <path d="M20 12v.01" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-line-dotted",
  },
);

export default IconLineDotted;
