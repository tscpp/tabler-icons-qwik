import { iconComponent } from "../icon";

const IconBatteryOff = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 3l18 18" />
    <path d="M11 7h6a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5m-2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h1" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-battery-off",
  },
);

export default IconBatteryOff;
