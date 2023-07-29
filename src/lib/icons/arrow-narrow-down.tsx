import { iconComponent } from "../icon";

const IconArrowNarrowDown = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 5l0 14" />
    <path d="M16 15l-4 4" />
    <path d="M8 15l4 4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-narrow-down",
  },
);

export default IconArrowNarrowDown;
