import { iconComponent } from "../icon";

const IconDatabase = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
    <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
    <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-database",
  },
);

export default IconDatabase;
