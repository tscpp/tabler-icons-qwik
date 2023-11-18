import ora from "ora";
import { Worker } from "worker_threads";
import isCi from "is-ci";
import { fileURLToPath } from "url";

if (
  import.meta.url.startsWith("file:") &&
  fileURLToPath(import.meta.url) === process.argv[1]
) {
  build();
}

export async function build() {
  let spinner;
  const startTime = performance.now();

  if (isCi) {
    console.log("Building...");
  } else {
    spinner = ora("0.0s").start();

    setInterval(() => {
      const currentTime = performance.now();
      const delta = (currentTime - startTime) / 1000;
      spinner.text = delta.toFixed(1) + "s";
    });
  }

  const worker = new Worker("./scripts/build-worker.mjs");

  await new Promise((resolve, reject) => {
    worker.on("error", (error) => {
      spinner?.fail();
      reject(error);
    });

    worker.on("messageerror", (error) => {
      spinner?.fail();
      reject(error);
    });

    worker.on("exit", () => {
      if (spinner) {
        spinner.succeed();
      } else {
        const endTime = performance.now();
        const delta = (endTime - startTime) / 1000;
        console.log(`Build finished in ${delta}s!`);
      }
      resolve();
    });
  });
}
