import { iconComponent } from "../icon";

const IconCaretUpDown = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 10l-6 -6l-6 6h12" />
    <path d="M18 14l-6 6l-6 -6h12" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-caret-up-down",
  },
);

export default IconCaretUpDown;
