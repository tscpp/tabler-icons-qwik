import { iconComponent } from "../icon";

const IconArrowUpTail = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 18l0 -15" />
    <path d="M15 6l-3 -3l-3 3" />
    <path d="M15 21l-3 -3l-3 3" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-up-tail",
  },
);

export default IconArrowUpTail;
