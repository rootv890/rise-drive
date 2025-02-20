import { config } from "dotenv"

config({
  path: ".env",
})

export const env = {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  SINGLESTORE_USER: process.env.SINGLESTORE_USER,
  SINGLESTORE_PASSWORD: process.env.SINGLESTORE_PASSWORD,
  SINGLESTORE_HOST: process.env.SINGLESTORE_HOST,
  SINGLESTORE_PORT: process.env.SINGLESTORE_PORT,
  SINGLESTORE_DATABASE: process.env.SINGLESTORE_DATABASE,
  UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
}
