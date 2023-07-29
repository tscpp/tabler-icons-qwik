import { iconComponent } from "../icon";

const IconUrgent = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 16v-4a4 4 0 0 1 8 0v4" />
    <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
    <path d="M6 16m0 1a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-urgent",
  },
);

export default IconUrgent;
