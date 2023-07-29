import { iconComponent } from "../icon";

const IconChecks = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 12l5 5l10 -10" />
    <path d="M2 12l5 5m5 -5l5 -5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-checks",
  },
);

export default IconChecks;
