import { iconComponent } from "../icon";

const IconFlagOff = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 5v16" />
    <path d="M19 5v9" />
    <path d="M7.641 3.645a5 5 0 0 1 4.359 1.355a5 5 0 0 0 7 0" />
    <path d="M5 14a5 5 0 0 1 7 0a4.984 4.984 0 0 0 3.437 1.429m3.019 -.966c.19 -.14 .371 -.294 .544 -.463" />
    <path d="M3 3l18 18" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-flag-off",
  },
);

export default IconFlagOff;
