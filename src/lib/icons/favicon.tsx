import { iconComponent } from "../icon";

const IconFavicon = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M2 5m0 3a3 3 0 0 1 3 -3h14a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3z" />
    <path d="M6 10v4" />
    <path d="M11 10a2 2 0 1 0 0 4" />
    <path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-favicon",
  },
);

export default IconFavicon;
