import { iconComponent } from "../icon";

const IconMessageReply = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
    <path d="M11 8l-3 3l3 3" />
    <path d="M16 11h-8" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-message-reply",
  },
);

export default IconMessageReply;
