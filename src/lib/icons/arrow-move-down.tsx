import { iconComponent } from "../icon";

const IconArrowMoveDown = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 11v10" />
    <path d="M9 18l3 3l3 -3" />
    <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-move-down",
  },
);

export default IconArrowMoveDown;
