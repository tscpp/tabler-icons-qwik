import { iconComponent } from "../icon";

const IconMapNorth = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M10 15v-6l4 6v-6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-map-north",
  },
);

export default IconMapNorth;
