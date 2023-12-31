import { iconComponent } from "../icon";

const IconCircleCaretLeft = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 12l4 -4v8z" />
    <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-circle-caret-left",
  },
);

export default IconCircleCaretLeft;
