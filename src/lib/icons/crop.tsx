import { iconComponent } from "../icon";

const IconCrop = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 5v10a1 1 0 0 0 1 1h10" />
    <path d="M5 8h10a1 1 0 0 1 1 1v10" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-crop",
  },
);

export default IconCrop;
