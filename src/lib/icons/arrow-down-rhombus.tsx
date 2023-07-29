import { iconComponent } from "../icon";

const IconArrowDownRhombus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 8v13" />
    <path d="M15 18l-3 3l-3 -3" />
    <path d="M14.5 5.5l-2.5 -2.5l-2.5 2.5l2.5 2.5z" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-down-rhombus",
  },
);

export default IconArrowDownRhombus;
