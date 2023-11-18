import { iconComponent } from "../icon";

const IconInputX = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20 13v-4a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h7" />
    <path d="M22 22l-5 -5" />
    <path d="M17 22l5 -5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-input-x",
  },
);

export default IconInputX;
