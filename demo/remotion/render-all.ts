import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";
import { dataGitHub, dataUsers, dataSales } from "./src/data";

const compositions = [
  { id: "MainVideo", data: dataGitHub, output: "output-github-stars.mp4" },
  { id: "MainVideo", data: dataUsers, output: "output-user-growth.mp4" },
  { id: "MainVideo", data: dataSales, output: "output-sales.mp4" ],
};

async function render() {
  console.log("Bundling project...");
  const bundleLocation = await bundle({
    entryPoint: path.resolve("./src/index.ts"),
    webpackOverride: (config) => config,
  });

  for (const comp of compositions) {
    console.log(`\nRendering: ${comp.output}`);

    const composition = await selectComposition({
      serveUrl: bundleLocation,
      id: comp.id,
      inputProps: comp.data,
    });

    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: "h264",
      outputLocation: path.resolve(`./${comp.output}`),
    });

    console.log(`Done: ${comp.output}`);
  }

  console.log("\nAll videos rendered successfully!");
}

render().catch((err) => {
  console.error("Render failed:", err);
  process.exit(1);
});
