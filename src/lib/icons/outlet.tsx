import { iconComponent } from "../icon";

const IconOutlet = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <circle cx="9" cy="12" r=".5" fill="currentColor" />
    <circle cx="15" cy="12" r=".5" fill="currentColor" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-outlet",
  },
);

export default IconOutlet;
