import { iconComponent } from "../icon";

const IconMenorah = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 4v16" />
    <path d="M8 4v2a4 4 0 1 0 8 0v-2" />
    <path d="M4 4v2a8 8 0 1 0 16 0v-2" />
    <path d="M10 20h4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-menorah",
  },
);

export default IconMenorah;
