import { iconComponent } from "../icon";

const IconVenus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M12 14l0 7" />
    <path d="M9 18l6 0" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-venus",
  },
);

export default IconVenus;
