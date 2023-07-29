import { iconComponent } from "../icon";

const IconBracketsContain = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 4h-4v16h4" />
    <path d="M17 4h4v16h-4" />
    <path d="M8 16h.01" />
    <path d="M12 16h.01" />
    <path d="M16 16h.01" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-brackets-contain",
  },
);

export default IconBracketsContain;
