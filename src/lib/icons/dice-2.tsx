import { iconComponent } from "../icon";

const IconDice2 = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
    <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-dice-2",
  },
);

export default IconDice2;
