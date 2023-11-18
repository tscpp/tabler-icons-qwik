import { iconComponent } from "../icon";

const IconRobotFace = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" />
    <path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1" />
    <path d="M9 7l-1 -4" />
    <path d="M15 7l1 -4" />
    <path d="M9 12v-1" />
    <path d="M15 12v-1" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-robot-face",
  },
);

export default IconRobotFace;
