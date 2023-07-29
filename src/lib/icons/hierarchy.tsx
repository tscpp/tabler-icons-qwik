import { iconComponent } from "../icon";

const IconHierarchy = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M6.5 17.5l5.5 -4.5l5.5 4.5" />
    <path d="M12 7l0 6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-hierarchy",
  },
);

export default IconHierarchy;
