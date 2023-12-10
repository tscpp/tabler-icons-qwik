import { iconComponent } from "../icon";

const IconParkingCircle = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 16v-8h2.667c.736 0 1.333 .895 1.333 2s-.597 2 -1.333 2h-2.667" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-parking-circle",
  },
);

export default IconParkingCircle;
