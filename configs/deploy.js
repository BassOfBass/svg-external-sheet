const path = require("path");
const fse = require("fs-extra");
// const { format: formatDate } = require("date-fns");

const { buildPath } = require("./vars");

const distPath = path.resolve(process.cwd(), buildPath);
const deployPath = path.resolve(process.cwd(), "docs");

(async () => {
  try {
    await fse.emptyDir(deployPath);
    console.log(`Successfully emptied directory ${deployPath}`);

    await fse.copy(distPath, deployPath, {
      filter: excludeSourceMaps,
      preserveTimestamps: true
    });

    const date = new Date();
    console.log(`Deployed successfully at ${date.toISOString()}`);
  } catch (error) {
    console.error(`Deploy failed, reason: \n${error}`);
  }
})();

/**
 * @type {fse.CopyFilterAsync}
 */
async function excludeSourceMaps(src, dist) {
  const result = src.indexOf("source-maps") > -1;
  return !result;
}