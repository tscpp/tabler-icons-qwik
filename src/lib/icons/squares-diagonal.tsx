import { iconComponent } from "../icon";

const IconSquaresDiagonal = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
    <path d="M8.586 19.414l10.827 -10.827" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-squares-diagonal",
  },
);

export default IconSquaresDiagonal;
