import { iconComponent } from "../icon";

const IconReservedLine = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 20h6" />
    <path d="M12 14v6" />
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M9 9h6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-reserved-line",
  },
);

export default IconReservedLine;
