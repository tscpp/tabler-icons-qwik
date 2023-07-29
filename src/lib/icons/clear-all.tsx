import { iconComponent } from "../icon";

const IconClearAll = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 6h12" />
    <path d="M6 12h12" />
    <path d="M4 18h12" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-clear-all",
  },
);

export default IconClearAll;
