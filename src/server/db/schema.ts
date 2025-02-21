import { text, index, singlestoreTableCreator, bigint, singlestoreEnum, timestamp } from 'drizzle-orm/singlestore-core';

export const createTable = singlestoreTableCreator( ( name ) => `rise_drive_${ name }` );

export const files_table = createTable( 'files_table', {
  id: bigint( 'id', { mode: 'number', unsigned: true } ).primaryKey().autoincrement(),
  name: text( 'name' ).notNull(),
  type: text( 'type' ).notNull(),
  url: text( 'url' ).notNull(),
  parent: bigint( 'parent', { mode: 'number', unsigned: true } ).notNull(),
  owner: text( 'owner' ).notNull(),
  size: bigint( 'size', { mode: 'number', unsigned: true } ).notNull(),
  createdAt: timestamp( 'created_at' ).defaultNow(),
  updatedAt: timestamp( 'updated_at' ).defaultNow(),
}, ( tempTable ) => {
  return [
    // Easy way to get all children of a folder
    index( 'parent_idx' ).on( tempTable.parent ),
    index( 'owner_idx' ).on( tempTable.owner ),
  ];
} );

export type file_table_schema = typeof files_table.$inferSelect;

// single store enum
export const folderType = singlestoreEnum( 'folder_type', [ 'folder', 'system', 'user', 'shared' ] ).default( 'folder' );

export const folders_table = createTable( 'folders_table', {
  id: bigint( 'id', { mode: 'number', unsigned: true } ).primaryKey().autoincrement(),
  name: text( 'name' ).notNull(),
  parent: bigint( 'parent', { mode: 'number', unsigned: true } ),
  owner: text( 'owner' ).notNull(),
  type: folderType,
  url: text( 'url' ).notNull(),
  createdAt: timestamp( 'created_at' ).defaultNow(),
  updatedAt: timestamp( 'updated_at' ).defaultNow(),
}, ( tempTable ) => {
  return [
    index( 'parent_idx' ).on( tempTable.parent ),
    index( 'owner_idx' ).on( tempTable.owner ),
  ];
} );

export type folder_table_schema = typeof folders_table.$inferSelect;
