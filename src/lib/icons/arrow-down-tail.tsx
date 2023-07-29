import { iconComponent } from "../icon";

const IconArrowDownTail = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 6v15" />
    <path d="M9 18l3 3l3 -3" />
    <path d="M9 3l3 3l3 -3" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-down-tail",
  },
);

export default IconArrowDownTail;
