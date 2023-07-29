import { iconComponent } from "../icon";

const IconArrowNarrowUp = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 5l0 14" />
    <path d="M16 9l-4 -4" />
    <path d="M8 9l4 -4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-narrow-up",
  },
);

export default IconArrowNarrowUp;
