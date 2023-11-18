import { iconComponent } from "../icon";

const IconSquareMinus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10" />
    <path d="M16 19h6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-square-minus",
  },
);

export default IconSquareMinus;
