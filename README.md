# Tabler Icons for Qwik

Unofficial implementation of the [Tabler Icons](https://tabler-icons.io)
library for Qwik applications. The package is automatically synced with
`@tabler/icons` two times every day.

See <https://tabler-icons.io>, or <https://github.com/tabler/tabler-icons> for
more information.

## Installation

```sh
# run either of theses
npm install tabler-icons-qwik
yarn add tabler-icons-qwik
pnpm add tabler-icons-qwik
```

## How to use

Each icon can be imported as a component. You can find all icons at
<https://tabler-icons.io>.

```js
import { IconArrowLeft } from "tabler-icons-qwik";

<IconArrowLeft size={24} color="currentColor" stroke={2} />;
```

## Vite

Using this library with [Vite](https://vitejs.dev/) in development mode will
cause extremely long loading times. This is because vite does not tree-shake in
development mode, see <https://github.com/vitejs/vite/issues/8237>.

The workaround is to use the `vite-plugin-entry-shaking` plugin to force
tree-shaking of specific modules.

```sh
# run either of theses
npm install vite-plugin-entry-shaking
yarn add vite-plugin-entry-shaking
pnpm add vite-plugin-entry-shaking
```

Add this to your existing vite config:

```js
import EntryShakingPlugin from "vite-plugin-entry-shaking";

export default defineConfig({
  plugins: [
    EntryShakingPlugin({
      targets: [
        resolve(__dirname, "node_modules/tabler-icons-qwik/lib/esm/index.js"),
      ],
    }),
  ],
});
```

## License

Tabler Icons is licensed under the
[MIT License](https://github.com/tscpp/tabler-icons-qwik).
