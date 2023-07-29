import { iconComponent } from "../icon";

const IconEyeDown = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
    <path d="M19 16v6" />
    <path d="M22 19l-3 3l-3 -3" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-eye-down",
  },
);

export default IconEyeDown;
