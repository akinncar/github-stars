interface ConfigType {
  API_URL: string;
}

export const config: ConfigType = {
  API_URL: process.env.API_URL || ''
};
