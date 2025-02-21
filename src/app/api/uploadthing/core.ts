import { MUTATIONS, QUERIES } from "@/server/db/queries";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";
const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f( {
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  } ).input( z.object( {
    folderId: z.number(),
  } ) )
    // Set permissions and file types for this FileRoute
    .middleware( async ( { input } ) => {
      // This code runs on your server before upload
      const user = await auth();

      // If you throw, the user will not be able to upload
      if ( !user.userId ) throw new UploadThingError( "Unauthorized" );
      if ( input.folderId === null || !input.folderId ) throw new UploadThingError( "Folder ID is required" );

      const folder = await QUERIES.getFolderById( input.folderId );
      if ( !folder ) throw new UploadThingError( "Folder not found" );

      // check if user has access to the folder
      if ( folder[ 0 ].owner !== user.userId ) throw new UploadThingError( "Unauthorized" );

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.userId, folderId: input.folderId };
    } )
    .onUploadComplete( async ( { metadata, file } ) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log( "Upload complete for userId:", metadata.userId );
      console.log( "file url", file.ufsUrl );
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback

      // Update the file in the database
      await MUTATIONS.createFile( {
        userId: metadata.userId,
        file: {
          name: file.name,
          type: file.type,
          url: file.ufsUrl,
          size: file.size,
        },
        parentId: metadata.folderId,
      } );

      return { uploadedBy: metadata.userId, file: file.ufsUrl };
    } ),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
