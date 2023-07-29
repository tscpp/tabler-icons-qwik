import { iconComponent } from "../icon";

const IconBalloon = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 8a2 2 0 0 0 -2 -2" />
    <path d="M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9" />
    <path d="M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-balloon",
  },
);

export default IconBalloon;
