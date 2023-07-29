import { iconComponent } from "../icon";

const IconTestPipe2 = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 3v15a3 3 0 0 1 -6 0v-15" />
    <path d="M9 12h6" />
    <path d="M8 3h8" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-test-pipe-2",
  },
);

export default IconTestPipe2;
