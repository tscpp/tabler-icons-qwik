import { iconComponent } from "../icon";

const IconCurrencyShekel = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 18v-12h4a4 4 0 0 1 4 4v4" />
    <path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-currency-shekel",
  },
);

export default IconCurrencyShekel;
