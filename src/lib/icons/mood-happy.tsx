import { iconComponent } from "../icon";

const IconMoodHappy = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M9 9l.01 0" />
    <path d="M15 9l.01 0" />
    <path d="M8 13a4 4 0 1 0 8 0h-8" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-mood-happy",
  },
);

export default IconMoodHappy;
