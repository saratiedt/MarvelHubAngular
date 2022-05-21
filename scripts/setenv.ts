const { mkdirSync } = require('fs');
const { existsSync } = require('fs');
const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const environmentsFolder = './src/environments'

const enviromnentEntries = [
  'MARVEL_BASE_URL',
  'MARVEL_API_PUBLIC_KEY',
  'MARVEL_API_PRIVATE_KEY',
]

const anyVarEmpty = enviromnentEntries.some((entry) => {
  return !process.env[entry]
})

if (anyVarEmpty) {
  console.error('All the required environment variables were not provided!');
  process.exit(-1);
}

const targetPath = `${environmentsFolder}/environment.ts`;

const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  MARVEL_BASE_URL: '${process.env.MARVEL_BASE_URL}',
  MARVEL_API_PUBLIC_KEY: '${process.env.MARVEL_API_PUBLIC_KEY}',
  MARVEL_API_PRIVATE_KEY: '${process.env.MARVEL_API_PRIVATE_KEY}'
};
`;

if (!existsSync(environmentsFolder)) {
  console.log('Environments folder does not exists. Creating it!')
  mkdirSync(environmentsFolder);
}

writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
