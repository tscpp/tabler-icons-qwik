import { iconComponent } from "../icon";

const IconLayoutNavbarExpand = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M4 9h16" />
    <path d="M10 14l2 2l2 -2" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-layout-navbar-expand",
  },
);

export default IconLayoutNavbarExpand;
