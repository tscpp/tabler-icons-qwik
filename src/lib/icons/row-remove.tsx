import { iconComponent } from "../icon";

const IconRowRemove = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z" />
    <path d="M10 16l4 4" />
    <path d="M10 20l4 -4" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-row-remove",
  },
);

export default IconRowRemove;
