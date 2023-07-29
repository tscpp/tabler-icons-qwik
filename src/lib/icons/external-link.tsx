import { iconComponent } from "../icon";

const IconExternalLink = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
    <path d="M11 13l9 -9" />
    <path d="M15 4h5v5" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-external-link",
  },
);

export default IconExternalLink;
