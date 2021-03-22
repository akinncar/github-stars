import dotenvSafe from 'dotenv-safe';
import path from 'path';

const cwd = process.cwd();

const root = path.join.bind(cwd);

dotenvSafe.config({
  path: root('.env'),
  sample: root('.env.example')
});

interface ConfigType {
  PORT: string | number;
  MONGO_URI: string;
  GITHUB_ACCESS_TOKEN: string;
}

export const config: ConfigType = {
  PORT: process.env.PORT || 3333,
  MONGO_URI: process.env.MONGO_URI || '',
  GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN || ''
};
