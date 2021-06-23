require('dotenv').config();

const buildPath = process.env.BUILD_PATH || "dist";
const hostName = process.env.HOST_NAME || "/";
const languages = process.env.SUPPORTED_LANGUAGES || "en";

module.exports = {
  buildPath,
  hostName,
  languages
};
