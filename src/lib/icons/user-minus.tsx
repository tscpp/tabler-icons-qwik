import { iconComponent } from "../icon";

const IconUserMinus = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.009 .128" />
    <path d="M16 19h6" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-user-minus",
  },
);

export default IconUserMinus;
