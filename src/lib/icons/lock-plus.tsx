import { iconComponent } from "../icon";

const IconLockPlus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12.5 21h-5.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.74 1.012" />
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
    <path d="M16 19h6" />
    <path d="M19 16v6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-lock-plus",
  },
);

export default IconLockPlus;
