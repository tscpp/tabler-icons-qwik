import { iconComponent } from "../icon";

const IconTemperatureMinus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
    <path d="M8 9l4 0" />
    <path d="M16 9l6 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-temperature-minus",
  },
);

export default IconTemperatureMinus;
