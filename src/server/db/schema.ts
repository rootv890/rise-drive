import { sql } from 'drizzle-orm';
import { singlestoreTable, text, int, index } from 'drizzle-orm/singlestore-core';


export const users = singlestoreTable( 'users', {
  id: text( 'id' ).primaryKey(),
  name: text( 'name' ),
  email: text( 'email' ),
  password: text( 'password' ),
}, ( t ) => ( {
  emailIdx: index( 'email_idx' ).on( t.email ),
} ) );
