import { iconComponent } from "../icon";

const IconCoinYuan = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M9 13h6" />
    <path d="M9 8l3 4.5" />
    <path d="M15 8l-3 4.5v4.5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-coin-yuan",
  },
);

export default IconCoinYuan;
