import { iconComponent } from "../icon";

const IconBath = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
    <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
    <path d="M4 21l1 -1.5" />
    <path d="M20 21l-1 -1.5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-bath",
  },
);

export default IconBath;
