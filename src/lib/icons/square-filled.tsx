import { iconComponent } from "../icon";

const IconSquareFilled = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z"
      stroke-width="0"
      fill="currentColor"
    />
  </>,
  {
    class: "icon icon-tabler icon-tabler-square-filled",
  },
);

export default IconSquareFilled;
