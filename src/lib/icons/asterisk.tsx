import { iconComponent } from "../icon";

const IconAsterisk = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12l8 -4.5" />
    <path d="M12 12v9" />
    <path d="M12 12l-8 -4.5" />
    <path d="M12 12l8 4.5" />
    <path d="M12 3v9" />
    <path d="M12 12l-8 4.5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-asterisk",
  },
);

export default IconAsterisk;
