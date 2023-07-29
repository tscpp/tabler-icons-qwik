import { iconComponent } from "../icon";

const IconUserCheck = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
    <path d="M15 19l2 2l4 -4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-user-check",
  },
);

export default IconUserCheck;
