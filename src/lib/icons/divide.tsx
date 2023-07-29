import { iconComponent } from "../icon";

const IconDivide = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="6" r="1" fill="currentColor" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
    <path d="M5 12l14 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-divide",
  },
);

export default IconDivide;
