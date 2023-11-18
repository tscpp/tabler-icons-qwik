import { iconComponent } from "../icon";

const IconCaretLeftRight = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 18l6 -6l-6 -6v12" />
    <path d="M10 18l-6 -6l6 -6v12" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-caret-left-right",
  },
);

export default IconCaretLeftRight;
