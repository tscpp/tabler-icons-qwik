import { iconComponent } from "../icon";

const IconViewfinder = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 3l0 4" />
    <path d="M12 21l0 -3" />
    <path d="M3 12l4 0" />
    <path d="M21 12l-3 0" />
    <path d="M12 12l0 .01" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-viewfinder",
  },
);

export default IconViewfinder;
