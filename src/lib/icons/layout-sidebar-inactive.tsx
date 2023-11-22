import { iconComponent } from "../icon";

const IconLayoutSidebarInactive = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
    <path d="M9 4v1" />
    <path d="M9 9v1" />
    <path d="M9 14v1" />
    <path d="M9 19v1" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-layout-sidebar-inactive",
  },
);

export default IconLayoutSidebarInactive;
