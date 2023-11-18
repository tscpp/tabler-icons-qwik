import { iconComponent } from "../icon";

const IconSquarePlus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-square-plus",
  },
);

export default IconSquarePlus;
