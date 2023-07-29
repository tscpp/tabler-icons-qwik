import { iconComponent } from "../icon";

const IconPlusMinus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 7h6" />
    <path d="M7 4v6" />
    <path d="M20 18h-6" />
    <path d="M5 19l14 -14" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-plus-minus",
  },
);

export default IconPlusMinus;
