import { iconComponent } from "../icon";

const IconCategory = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4h6v6h-6z" />
    <path d="M14 4h6v6h-6z" />
    <path d="M4 14h6v6h-6z" />
    <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-category",
  },
);

export default IconCategory;
