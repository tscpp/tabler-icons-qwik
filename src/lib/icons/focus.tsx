import { iconComponent } from "../icon";

const IconFocus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r=".5" fill="currentColor" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-focus",
  },
);

export default IconFocus;
