import { iconComponent } from "../icon";

const IconEyePlus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
    <path d="M16 19h6" />
    <path d="M19 16v6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-eye-plus",
  },
);

export default IconEyePlus;
