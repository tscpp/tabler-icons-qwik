import { iconComponent } from "../icon";

const IconEaseInOutControlPoints = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" />
    <path d="M17 20h-2" />
    <path d="M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
    <path d="M7 4h2" />
    <path d="M14 4h-2" />
    <path d="M12 20h-2" />
    <path d="M3 20c8 0 10 -16 18 -16" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-ease-in-out-control-points",
  },
);

export default IconEaseInOutControlPoints;
