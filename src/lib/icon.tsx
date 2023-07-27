import { type JSXNode, component$ } from "@builder.io/qwik";

export interface IconProps {
  [key: string]: unknown;
  size?: number;
  color?: string;
  stroke?: number
}

export const iconComponent = (
  children: JSXNode,
  attributes: Record<string, unknown>
) => {
  return component$<IconProps>((props) => {
    const { size = 24, color = "currentColor", stroke = 2, ...rest } = props;
    return (
      <svg
        {...defaultAttributes}
        {...attributes}
        width={size}
        height={size}
        stroke={color}
        stroke-width={stroke}
        {...rest}
      >
        {children}
      </svg>
    );
  });
};

// Note! Make sure to sync with /scripts/build.mjs
export const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "currentColor",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};
