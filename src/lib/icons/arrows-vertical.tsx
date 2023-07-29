import { iconComponent } from "../icon";

const IconArrowsVertical = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7l4 -4l4 4" />
    <path d="M8 17l4 4l4 -4" />
    <path d="M12 3l0 18" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrows-vertical",
  },
);

export default IconArrowsVertical;
