import { iconComponent } from "../icon";

const IconSquare = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-square",
  },
);

export default IconSquare;
