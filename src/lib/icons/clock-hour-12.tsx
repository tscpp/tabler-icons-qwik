import { iconComponent } from "../icon";

const IconClockHour12 = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 7v5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-clock-hour-12",
  },
);

export default IconClockHour12;
