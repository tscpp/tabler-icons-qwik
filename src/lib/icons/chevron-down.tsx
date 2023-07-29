import { iconComponent } from "../icon";

const IconChevronDown = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 9l6 6l6 -6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-chevron-down",
  },
);

export default IconChevronDown;
