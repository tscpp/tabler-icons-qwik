import { iconComponent } from "../icon";

const IconArrowFork = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3h5v5" />
    <path d="M8 3h-5v5" />
    <path d="M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
    <path d="M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v.93" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-arrow-fork",
  },
);

export default IconArrowFork;
