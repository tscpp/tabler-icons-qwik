import { iconComponent } from "../icon";

const IconArrowsSort = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 9l4 -4l4 4m-4 -4v14" />
    <path d="M21 15l-4 4l-4 -4m4 4v-14" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrows-sort",
  },
);

export default IconArrowsSort;
