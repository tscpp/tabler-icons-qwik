import { iconComponent } from "../icon";

const IconBorderAll = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M4 12l16 0" />
    <path d="M12 4l0 16" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-border-all",
  },
);

export default IconBorderAll;
