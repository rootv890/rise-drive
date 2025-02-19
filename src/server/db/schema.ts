import { sql } from 'drizzle-orm';

import { singlestoreTable, text, int, index, singlestoreTableCreator, bigint } from 'drizzle-orm/singlestore-core';


export const createTable = singlestoreTableCreator( ( name ) => `rise_drive_${ name }` );

export const files = createTable( 'files_table', {
  id: bigint( 'id', { mode: 'number', unsigned: true } ).primaryKey().autoincrement(),
  name: text( 'name' ).notNull(),
  type: text( 'type' ).notNull(),
  url: text( 'url' ).notNull(),
  parent: bigint( 'parent', { mode: 'number', unsigned: true } ).notNull(),
  size: bigint( 'size', { mode: 'number', unsigned: true } ).notNull(),
  createdAt: text( 'created_at' ),
  updatedAt: text( 'updated_at' ),
}, ( tempTable ) => {
  return [
    // Easy way to get all children of a folder
    index( 'parent_idx' ).on( tempTable.parent ),
  ];
} );

export const folders = createTable( 'folders_table', {
  id: bigint( 'id', { mode: 'number', unsigned: true } ).primaryKey().autoincrement(),
  name: text( 'name' ).notNull(),
  parent: bigint( 'parent', { mode: 'number', unsigned: true } ),
  createdAt: text( 'created_at' ),
  updatedAt: text( 'updated_at' ),
}, ( tempTable ) => {
  return [
    index( 'parent_idx' ).on( tempTable.parent ),
  ];
} );
