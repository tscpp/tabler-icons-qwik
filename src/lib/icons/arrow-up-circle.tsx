import { iconComponent } from "../icon";

const IconArrowUpCircle = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 17v-14" />
    <path d="M15 6l-3 -3l-3 3" />
    <path d="M12 17a2 2 0 1 0 0 4a2 2 0 0 0 0 -4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-up-circle",
  },
);

export default IconArrowUpCircle;
