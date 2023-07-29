import { iconComponent } from "../icon";

const IconNorthStar = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12h18" />
    <path d="M12 21v-18" />
    <path d="M7.5 7.5l9 9" />
    <path d="M7.5 16.5l9 -9" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-north-star",
  },
);

export default IconNorthStar;
