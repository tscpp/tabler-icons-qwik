import { iconComponent } from "../icon";

const IconFolderRoot = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M12 15v4" />
    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-folder-root",
  },
);

export default IconFolderRoot;
