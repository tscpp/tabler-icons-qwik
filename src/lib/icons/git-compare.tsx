import { iconComponent } from "../icon";

const IconGitCompare = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M11 6h5a2 2 0 0 1 2 2v8" />
    <path d="M14 9l-3 -3l3 -3" />
    <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" />
    <path d="M10 15l3 3l-3 3" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-git-compare",
  },
);

export default IconGitCompare;
