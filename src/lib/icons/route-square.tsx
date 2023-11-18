import { iconComponent } from "../icon";

const IconRouteSquare = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 17h4v4h-4z" />
    <path d="M17 3h4v4h-4z" />
    <path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-route-square",
  },
);

export default IconRouteSquare;
