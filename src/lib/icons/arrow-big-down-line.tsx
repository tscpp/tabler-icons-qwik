import { iconComponent } from "../icon";

const IconArrowBigDownLine = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-6h6v6z" />
    <path d="M15 3h-6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-big-down-line",
  },
);

export default IconArrowBigDownLine;
