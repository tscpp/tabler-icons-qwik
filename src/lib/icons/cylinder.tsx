import { iconComponent } from "../icon";

const IconCylinder = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" />
    <path d="M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-cylinder",
  },
);

export default IconCylinder;
