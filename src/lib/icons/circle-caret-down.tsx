import { iconComponent } from "../icon";

const IconCircleCaretDown = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 15l-4 -4h8z" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-circle-caret-down",
  },
);

export default IconCircleCaretDown;
