import { iconComponent } from "../icon";

const IconCircuitBulb = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M2 12h5" />
    <path d="M17 12h5" />
    <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M8.5 8.5l7 7" />
    <path d="M15.5 8.5l-7 7" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-circuit-bulb",
  },
);

export default IconCircuitBulb;
