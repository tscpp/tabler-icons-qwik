import { iconComponent } from "../icon";

const IconYinYang = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9" />
    <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="12" cy="16.5" r=".5" fill="currentColor" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-yin-yang",
  },
);

export default IconYinYang;
