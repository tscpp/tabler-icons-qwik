import { iconComponent } from "../icon";

const IconTextCaption = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 15h16" />
    <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    <path d="M4 20h12" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-text-caption",
  },
);

export default IconTextCaption;
