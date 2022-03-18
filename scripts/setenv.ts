const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

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

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  MARVEL_BASE_URL: "${process.env.MARVEL_BASE_URL}",
  MARVEL_API_PUBLIC_KEY: "${process.env.MARVEL_API_PUBLIC_KEY}",
  MARVEL_API_PRIVATE_KEY: "${process.env.MARVEL_API_PRIVATE_KEY}"
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
