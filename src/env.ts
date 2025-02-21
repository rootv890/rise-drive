import { config } from "dotenv";

config( {
  path: ".env",
} );

export const env = {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  SINGLESTORE_USER: process.env.SINGLESTORE_USER,
  SINGLESTORE_PASSWORD: process.env.SINGLESTORE_PASSWORD,
  SINGLESTORE_HOST: process.env.SINGLESTORE_HOST,
  SINGLESTORE_PORT: process.env.SINGLESTORE_PORT,
  SINGLESTORE_DATABASE: process.env.SINGLESTORE_DATABASE,
  UPLOADTHING_TOKEN: process.env.UPLOADTHING_TOKEN,
  POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY!,
  POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
};

// if ( !env.POSTHOG_KEY || !env.POSTHOG_HOST ) {
//   throw new Error( "POSTHOG_KEY and POSTHOG_HOST must be set" );
// }

// if ( !env.DATABASE_URL ) {
//   throw new Error( "DATABASE_URL must be set" );
// }

// if (
//   !env.SINGLESTORE_USER ||
//   !env.SINGLESTORE_PASSWORD ||
//   !env.SINGLESTORE_HOST ||
//   !env.SINGLESTORE_PORT ||
//   !env.SINGLESTORE_DATABASE
// ) {
//   throw new Error(
//     "SINGLESTORE_USER, SINGLESTORE_PASSWORD, SINGLESTORE_HOST, SINGLESTORE_PORT, and SINGLESTORE_DATABASE must be set"
//   );
// }

// if ( !env.UPLOADTHING_TOKEN ) {
//   throw new Error( "UPLOADTHING_TOKEN must be set" );
// }
