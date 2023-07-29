import { iconComponent } from "../icon";

const IconPlus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 5l0 14" />
    <path d="M5 12l14 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-plus",
  },
);

export default IconPlus;
