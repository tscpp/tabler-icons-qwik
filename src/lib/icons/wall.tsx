import { iconComponent } from "../icon";

const IconWall = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M4 8h16" />
    <path d="M20 12h-16" />
    <path d="M4 16h16" />
    <path d="M9 4v4" />
    <path d="M14 8v4" />
    <path d="M8 12v4" />
    <path d="M16 12v4" />
    <path d="M11 16v4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-wall",
  },
);

export default IconWall;
