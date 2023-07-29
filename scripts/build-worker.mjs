import {
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "fs";
import { js2xml, xml2js } from "xml-js";
import { rollup } from "rollup";
import { qwikRollup as rollupQwik } from "@builder.io/qwik/optimizer";
import { swc as rollupSwc } from "rollup-plugin-swc3";
import { nodeResolve as rollupNodeResolve } from "@rollup/plugin-node-resolve";
import * as tsup from "tsup";

// Note! Make sure to sync with /src/icon.tsx
const defaultAttributes = {
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

function kebabToTitleCase(input) {
  return input
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

rmSync("lib", { force: true, recursive: true });

const icons = readdirSync("node_modules/@tabler/icons/icons")
  .filter((filename) => filename.endsWith(".svg"))
  .map((filename) => filename.slice(0, -4));

mkdirSync("src/lib/icons", { recursive: true });

let entryData = "";
const inputs = { index: "src/index.ts" };

for (const icon of icons) {
  const content = readFileSync(
    `node_modules/@tabler/icons/icons/${icon}.svg`,
    "utf8",
  );

  const parsed = xml2js(content);

  const parsed2 = { ...parsed, elements: parsed.elements[0].elements };
  const children = js2xml(parsed2);

  const className = kebabToTitleCase(icon);

  const attributes = parsed.elements[0].attributes;
  for (const [key, value] of Object.entries(defaultAttributes)) {
    if (attributes[key] === value) {
      delete attributes[key];
    }
  }

  const data = `import { iconComponent } from '../icon';\n
const Icon${className} = iconComponent(
<>${children}</>,
${JSON.stringify(attributes, null, 2)}
);\n
export default Icon${className};\n`;

  writeFileSync(`src/lib/icons/${icon}.tsx`, data);
  inputs[`icons/${icon}`] = `src/lib/icons/${icon}.tsx`;

  entryData += `export { default as Icon${className} } from './icons/${icon}';\n`;
}

writeFileSync("src/lib/icons.tsx", entryData);

/** @type {import('rollup').OutputOptions} */
const output = {
  entryFileNames: "[name].js",
  chunkFileNames: "chunks/[hash].js",
  assetFileNames: "assets/[hash].js",
};

/** @type {import('rollup').RollupOptions} */
const options = {
  input: inputs,
  plugins: [
    rollupSwc(),
    rollupQwik({
      buildMode: "production",
      entryStrategy: { type: "inline" },
      target: "lib",
    }),
    rollupNodeResolve(),
  ],
  output: [
    {
      ...output,
      format: "esm",
      dir: "lib/esm",
    },
    {
      ...output,
      format: "cjs",
      dir: "lib/cjs",
    },
  ],
};

const build = await rollup(options);
await Promise.all(options.output.map((o) => build.write(o)));

await tsup.build({
  entry: ["src/index.ts"],
  dts: { only: true },
  outDir: "lib",
  format: "esm",
  silent: true,
  onSuccess: () => {},
});
