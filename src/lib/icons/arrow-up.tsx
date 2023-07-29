import { iconComponent } from "../icon";

const IconArrowUp = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 5l0 14" />
    <path d="M18 11l-6 -6" />
    <path d="M6 11l6 -6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-up",
  },
);

export default IconArrowUp;
