import { iconComponent } from "../icon";

const IconAlertSquare = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-alert-square",
  },
);

export default IconAlertSquare;
