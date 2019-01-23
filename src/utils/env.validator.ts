import {
  cleanEnv, port, str,
} from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    JWT_SECRET: str(),
    OPEN_CAGE_DATA_KEY: str(),
    POSTGRES_HOST: str(),
    POSTGRES_PORT: port(),
    POSTGRES_USER: str(),
    POSTGRES_PASSWORD: str(),
    POSTGRES_DB: str(),
    PORT: port(),
    REDIS_URL: str(),
  });
}

export default validateEnv;