import { iconComponent } from "../icon";

const IconBadges = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17 17v-4l-5 3l-5 -3v4l5 3z" />
    <path d="M17 8v-4l-5 3l-5 -3v4l5 3z" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-badges",
  },
);

export default IconBadges;
