import { iconComponent } from "../icon";

const IconPentagonPlus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12.5 21.005h-5.458a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-.78 2.401" />
    <path d="M16 19h6" />
    <path d="M19 16v6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-pentagon-plus",
  },
);

export default IconPentagonPlus;