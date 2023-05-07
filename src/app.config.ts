import path from 'path';


const ROOT_PATH = path.join(__dirname, '..');
const rootPkgJson = require(path.join(ROOT_PATH, 'package.json'));

export const APP = {
  ROOT_PATH,
  PORT: 3000,
};


export const PROJECT = {
    name: rootPkgJson.name,
    version: rootPkgJson.version,
    description: rootPkgJson.description,
}