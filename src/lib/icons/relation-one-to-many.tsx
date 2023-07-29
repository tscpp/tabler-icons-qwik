import { iconComponent } from "../icon";

const IconRelationOneToMany = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <path d="M7 10h1v4" />
    <path d="M14 14v-4l3 4v-4" />
    <path d="M11 10.5l0 .01" />
    <path d="M11 13.5l0 .01" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-relation-one-to-many",
  },
);

export default IconRelationOneToMany;
