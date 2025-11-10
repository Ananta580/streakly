import dotenv from "dotenv";

export interface EnvironmentConfig {
  PORT: number;
  JWT_TOKEN: string;
  CONNECTION_STRING: string;
}
let config = {} as EnvironmentConfig as any;
dotenv.config({ processEnv: config, debug: true, override: true });

config = { ...config };
export default config;
