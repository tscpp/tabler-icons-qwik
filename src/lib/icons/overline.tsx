import { iconComponent } from "../icon";

const IconOverline = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 9v5a5 5 0 0 0 10 0v-5" />
    <path d="M5 5h14" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-overline",
  },
);

export default IconOverline;
