import { iconComponent } from "../icon";

const IconMapWest = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M9 9l1 6l2 -3.75l2 3.75l1 -6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-map-west",
  },
);

export default IconMapWest;
