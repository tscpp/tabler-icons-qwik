import { iconComponent } from "../icon";

const IconHospitalCircle = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 16v-8" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M14 16v-8" />
    <path d="M10 12h4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-hospital-circle",
  },
);

export default IconHospitalCircle;
