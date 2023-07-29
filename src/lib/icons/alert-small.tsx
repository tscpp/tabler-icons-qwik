import { iconComponent } from "../icon";

const IconAlertSmall = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-alert-small",
  },
);

export default IconAlertSmall;
