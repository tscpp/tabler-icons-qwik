import { iconComponent } from "../icon";

const IconCircuitVoltmeter = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M5 12h-3" />
    <path d="M19 12h3" />
    <path d="M10 10l2 4l2 -4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-circuit-voltmeter",
  },
);

export default IconCircuitVoltmeter;
