import { iconComponent } from "../icon";

const IconRegistered = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M10 15v-6h2a2 2 0 1 1 0 4h-2" />
    <path d="M14 15l-2 -2" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-registered",
  },
);

export default IconRegistered;
