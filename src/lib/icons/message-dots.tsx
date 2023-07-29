import { iconComponent } from "../icon";

const IconMessageDots = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
    <path d="M12 11l0 .01" />
    <path d="M8 11l0 .01" />
    <path d="M16 11l0 .01" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-message-dots",
  },
);

export default IconMessageDots;
