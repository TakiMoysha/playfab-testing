// const { readdirSync, existsSync } = require("fs");
// const Bundler = require("parcel-bundler");
// const Path = require("path");
// const args = require("node-args-parse")(process.argv);
//
import * as esbuild from "https://deno.land/x/esbuild@v0.17.19/mod.js";

const { readdirSync, existsSync } = require("fs");
const Path = require("path");

const source = readdirSync(Path.join(__dirname, "src"), (err) => {
  console.error(err);
});

await esbuild
  .build({
    logLevel: "info",
    entryPoints: ["src/API_.ts"],
    bundle: true,
    outfile: "output/index.js",
  })
  .catch(() => process.exit(1));
