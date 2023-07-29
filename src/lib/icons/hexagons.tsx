import { iconComponent } from "../icon";

const IconHexagons = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 18v-5l4 -2l4 2v5l-4 2z" />
    <path d="M8 11v-5l4 -2l4 2v5" />
    <path d="M12 13l4 -2l4 2v5l-4 2l-4 -2" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-hexagons",
  },
);

export default IconHexagons;
