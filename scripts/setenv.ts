const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const dockerEnvironment = process.env['ENVIRONMENT'];

const isProduction = (environment === 'prod' || dockerEnvironment === 'prod');
const environmentsFolder = './src/environments';

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

const devPath = `${environmentsFolder}/environment.ts`;
const prodPath = `${environmentsFolder}/environment.prod.ts`;

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  MARVEL_BASE_URL: '${process.env.MARVEL_BASE_URL}',
  MARVEL_API_PUBLIC_KEY: '${process.env.MARVEL_API_PUBLIC_KEY}',
  MARVEL_API_PRIVATE_KEY: '${process.env.MARVEL_API_PRIVATE_KEY}'
};
`;

// Check if environments folder exists, if not, create it
if (!existsSync(environmentsFolder)) {
  console.log(`Folder: ${environmentsFolder} does not exists. Creating it!`);
  mkdirSync(environmentsFolder);
}

// Always crate the environment.ts file
writeFile(devPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${devPath}`);
});

// When prod, generate the respective file
if (isProduction) {
  writeFile(prodPath, environmentFileContent, function (err: any) {
    if (err) {
      console.log(err);
    }
    console.log(`Wrote variables to ${prodPath}`);
  });
}
