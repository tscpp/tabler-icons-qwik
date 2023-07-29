import { iconComponent } from "../icon";

const IconInnerShadowBottomLeft = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M6 12a6 6 0 0 0 6 6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-inner-shadow-bottom-left",
  },
);

export default IconInnerShadowBottomLeft;
