import { iconComponent } from "../icon";

const IconInfoCircle = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M12 9h.01" />
    <path d="M11 12h1v4h1" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-info-circle",
  },
);

export default IconInfoCircle;
