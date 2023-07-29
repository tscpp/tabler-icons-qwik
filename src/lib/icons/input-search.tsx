import { iconComponent } from "../icon";

const IconInputSearch = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19 11v-3a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h5" />
    <path d="M15.5 15.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
    <path d="M17.5 17.5l2.5 2.5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-input-search",
  },
);

export default IconInputSearch;
