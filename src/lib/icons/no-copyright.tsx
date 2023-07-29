import { iconComponent } from "../icon";

const IconNoCopyright = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
    <path d="M6 6l1.5 1.5" />
    <path d="M16.5 16.5l1.5 1.5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-no-copyright",
  },
);

export default IconNoCopyright;
