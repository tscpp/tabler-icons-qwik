import { iconComponent } from "../icon";

const IconBodyScan = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M10 17v-1a2 2 0 1 1 4 0v1" />
    <path d="M8 10c.666 .666 1.334 1 2 1h4c.666 0 1.334 -.334 2 -1" />
    <path d="M12 11v3" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-body-scan",
  },
);

export default IconBodyScan;
