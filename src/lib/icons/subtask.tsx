import { iconComponent } from "../icon";

const IconSubtask = iconComponent(
  <>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 9l6 0" />
    <path d="M4 5l4 0" />
    <path d="M6 5v11a1 1 0 0 0 1 1h5" />
    <path d="M12 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
    <path d="M12 15m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
  </>,
  {
    class: "icon icon-tabler icon-tabler-subtask",
  },
);

export default IconSubtask;
