import { iconComponent } from "../icon";

const IconArrowUpBar = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21l0 -18" />
    <path d="M15 6l-3 -3l-3 3" />
    <path d="M9 21l6 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-up-bar",
  },
);

export default IconArrowUpBar;
