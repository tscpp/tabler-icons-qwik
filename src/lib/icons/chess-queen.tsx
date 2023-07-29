import { iconComponent } from "../icon";

const IconChessQueen = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 16l2 -11l-4 4l-2 -5l-2 5l-4 -4l2 11" />
    <path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z" />
    <path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M6 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M18 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-chess-queen",
  },
);

export default IconChessQueen;
