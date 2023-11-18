import { iconComponent } from "../icon";

const IconClock12 = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12a9 9 0 0 0 9 9m9 -9a9 9 0 1 0 -18 0" />
    <path d="M12 7v5l.5 .5" />
    <path d="M18 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
    <path d="M15 21v-6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-clock-12",
  },
);

export default IconClock12;
