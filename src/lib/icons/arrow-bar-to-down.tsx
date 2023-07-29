import { iconComponent } from "../icon";

const IconArrowBarToDown = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 20l16 0" />
    <path d="M12 14l0 -10" />
    <path d="M12 14l4 -4" />
    <path d="M12 14l-4 -4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-bar-to-down",
  },
);

export default IconArrowBarToDown;
