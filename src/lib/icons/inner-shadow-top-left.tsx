import { iconComponent } from "../icon";

const IconInnerShadowTopLeft = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0 -18z" />
    <path d="M6 12a6 6 0 0 1 6 -6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-inner-shadow-top-left",
  },
);

export default IconInnerShadowTopLeft;
