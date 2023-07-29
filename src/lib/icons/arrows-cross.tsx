import { iconComponent } from "../icon";

const IconArrowsCross = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 4h4v4" />
    <path d="M15 9l5 -5" />
    <path d="M4 20l5 -5" />
    <path d="M16 20h4v-4" />
    <path d="M4 4l16 16" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrows-cross",
  },
);

export default IconArrowsCross;
