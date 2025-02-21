import { type Config } from 'drizzle-kit';

import { env } from '@/env';
export default {
  dialect: 'singlestore',
  schema: './src/server/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    host: env.SINGLESTORE_HOST!,
    port: parseInt( env.SINGLESTORE_PORT! ),
    user: env.SINGLESTORE_USER!,
    password: env.SINGLESTORE_PASSWORD!,
    database: env.SINGLESTORE_DATABASE!,
    ssl: {},
  },
  tablesFilter: [ 'rise_drive_*' ],
  verbose: true,
  strict: true,
} satisfies Config;
