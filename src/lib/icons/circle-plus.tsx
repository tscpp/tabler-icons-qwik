import { iconComponent } from "../icon";

const IconCirclePlus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-circle-plus",
  },
);

export default IconCirclePlus;
