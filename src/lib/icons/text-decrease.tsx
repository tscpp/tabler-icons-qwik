import { iconComponent } from "../icon";

const IconTextDecrease = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5" />
    <path d="M4 13h7" />
    <path d="M21 12h-6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-text-decrease",
  },
);

export default IconTextDecrease;
