import { type JSXNode, component$ } from "@builder.io/qwik";

export interface IconProps {
  [key: string]: unknown;
  size?: number;
  color?: string;
  stroke?: number;
}

export const iconComponent = (
  children: JSXNode,
  attributes: Record<string, unknown>,
) => {
  return component$<IconProps>((props) => {
    const { size, color, stroke, ...rest } = props;
    return (
      <svg
        {...{
          ...defaultAttributes,
          ...attributes,
          width: size ?? 24,
          height: size ?? 24,
          stroke: color ?? "currentColor",
          "stroke-width": stroke ?? 2,
          ...rest,
        }}
      >
        {children}
      </svg>
    );
  });
};

// Note! Make sure to sync with /scripts/build.mjs
export const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};
