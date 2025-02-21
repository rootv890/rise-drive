import { drizzle } from 'drizzle-orm/singlestore';
import { env } from '@/env';
import { createPool, type Pool } from 'mysql2/promise';

const globalForDB = globalThis as unknown as {
  conn: Pool | undefined;
};


const conn = globalForDB.conn ?? createPool( {
  host: env.SINGLESTORE_HOST,
  port: Number( env.SINGLESTORE_PORT ),
  user: env.SINGLESTORE_USER,
  password: env.SINGLESTORE_PASSWORD,
  database: env.SINGLESTORE_DATABASE,
  ssl: {},
  maxIdle: 0 // handles hot-reloading
} );

if ( env.NODE_ENV !== 'production' ) globalForDB.conn = conn;


conn.addListener( 'error', ( err ) => {
  console.error( 'Database connection error: ', err );
} );

conn.addListener( 'close', () => {
  console.error( 'Database connection closed' );
} );

export const db = drizzle( conn );
