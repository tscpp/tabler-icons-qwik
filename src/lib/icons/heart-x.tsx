import { iconComponent } from "../icon";

const IconHeartX = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19.5 12.572l-.5 .428m-6 6l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    <path d="M22 22l-5 -5" />
    <path d="M17 22l5 -5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-heart-x",
  },
);

export default IconHeartX;
