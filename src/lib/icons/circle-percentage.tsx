import { iconComponent } from "../icon";

const IconCirclePercentage = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M9 15.075l6 -6" />
    <path d="M9 9.105v.015" />
    <path d="M15 15.12v.015" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-circle-percentage",
  },
);

export default IconCirclePercentage;
