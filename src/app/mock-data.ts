import { folders_table as FolderType, files_table as FileType } from "@/server/db/schema";

export type Folder = typeof FolderType.$inferInsert;
export type File = typeof FileType.$inferInsert;

// export const files: File[] = [
//   // Personal folder files
//   {
//     id: 1,
//     name: "W2_Form.pdf",
//     type: "pdf",
//     url: "/Documents/Personal/Tax/2022/W2_Form.pdf",
//     parent: 3, // ID of 'year-2022-tax' folder
//     size: 65536,
//     createdAt: "2023-04-10T09:00:00.000Z",
//     updatedAt: "2023-04-11T13:00:00.000Z"
//   },
//   {
//     id: 2,
//     name: "1099_Form.pdf",
//     type: "pdf",
//     url: "/Documents/Personal/Tax/2022/1099_Form.pdf",
//     parent: 4, // ID of 'year-2022-tax' folder
//     size: 73728,
//     createdAt: "2023-04-15T10:00:00.000Z",
//     updatedAt: "2023-04-16T14:00:00.000Z"
//   },
//   {
//     id: 3,
//     name: "ID Card.pdf",
//     type: "pdf",
//     url: "/Documents/Personal/ID Card.pdf",
//     parent: 3, // ID of 'personal-docs' folder
//     size: 61440,
//     createdAt: "2023-09-10T17:00:00.000Z",
//     updatedAt: "2023-09-11T08:00:00.000Z"
//   },
//   {
//     id: 4,
//     name: "Passport copy.jpeg",
//     type: "jpeg",
//     url: "/Documents/Personal/Passport copy.jpeg",
//     parent: 3, // ID of 'personal-docs' folder
//     size: 122880,
//     createdAt: "2023-08-15T13:00:00.000Z",
//     updatedAt: "2023-08-16T19:00:00.000Z"
//   },
//   // Work folder files
//   {
//     id: 5,
//     name: "Client Report Q3.pdf",
//     type: "pdf",
//     url: "/Documents/Work/Client Report Q3.pdf",
//     parent: 5, // ID of 'work-docs' folder
//     size: 92160,
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-02T16:00:00.000Z"
//   },
//   {
//     id: 6,
//     name: "Invoice #1234.docx",
//     type: "docx",
//     url: "/Documents/Work/Invoice #1234.docx",
//     parent: 5, // ID of 'work-docs' folder
//     size: 40960,
//     createdAt: "2024-03-10T14:00:00.000Z",
//     updatedAt: "2024-03-11T09:00:00.000Z"
//   },
//   {
//     id: 7,
//     name: "Meeting Notes.docx",
//     type: "docx",
//     url: "/Documents/Meeting Notes.docx",
//     parent: 4, // ID of 'documents' folder
//     size: 51200,
//     createdAt: "2023-10-25T10:00:00.000Z",
//     updatedAt: "2023-10-26T14:30:00.000Z"
//   },
//   {
//     id: 8,
//     name: "Project Proposal.pdf",
//     type: "pdf",
//     url: "/Documents/Project Proposal.pdf",
//     parent: 4, // ID of 'documents' folder
//     size: 102400,
//     createdAt: "2023-11-15T09:00:00.000Z",
//     updatedAt: "2023-11-15T09:00:00.000Z"
//   },
//   // Pictures folder files
//   {
//     id: 9,
//     name: "Eiffel Tower.jpeg",
//     type: "jpeg",
//     url: "/Pictures/Travel/Europe/Eiffel Tower.jpeg",
//     parent: 6, // ID of 'europe-pics' folder
//     size: 204800,
//     createdAt: "2023-07-01T09:00:00.000Z",
//     updatedAt: "2023-07-01T09:00:00.000Z"
//   },
//   {
//     id: 10,
//     name: "Colosseum.png",
//     type: "png",
//     url: "/Pictures/Travel/Europe/Colosseum.png",
//     parent: 6, // ID of 'europe-pics' folder
//     size: 286720,
//     createdAt: "2023-06-15T11:00:00.000Z",
//     updatedAt: "2023-06-16T17:00:00.000Z"
//   },
//   {
//     id: 11,
//     name: "Christmas 2021.jpeg",
//     type: "jpeg",
//     url: "/Pictures/Family/Christmas 2021.jpeg",
//     parent: 7, // ID of 'christmas-pics' folder
//     size: 184320,
//     createdAt: "2022-12-25T14:00:00.000Z",
//     updatedAt: "2022-12-26T10:00:00.000Z"
//   },
//   {
//     id: 12,
//     name: "Birthday party.png",
//     type: "png",
//     url: "/Pictures/Family/Birthday party.png",
//     parent: 7, // ID of 'christmas-pics' folder
//     size: 245760,
//     createdAt: "2023-05-05T13:00:00.000Z",
//     updatedAt: "2023-05-06T19:00:00.000Z"
//   },
//   {
//     id: 13,
//     name: "Vacation Photo.jpeg",
//     type: "jpeg",
//     url: "/Pictures/Vacation Photo.jpeg",
//     parent: 8, // ID of 'pictures' folder
//     size: 256000,
//     createdAt: "2024-01-05T16:00:00.000Z",
//     updatedAt: "2024-01-05T16:00:00.000Z"
//   },
//   {
//     id: 14,
//     name: "Family gathering.png",
//     type: "png",
//     url: "/Pictures/Family gathering.png",
//     parent: 8, // ID of 'pictures' folder
//     size: 307200,
//     createdAt: "2023-12-24T12:00:00.000Z",
//     updatedAt: "2023-12-25T18:00:00.000Z"
//   },
//   // Projects folder files
//   {
//     id: 15,
//     name: "index.html",
//     type: "html",
//     url: "/Projects/Web/Portfolio/index.html",
//     parent: 10, // ID of 'portfolio-project' folder
//     size: 2048,
//     createdAt: "2024-01-20T10:00:00.000Z",
//     updatedAt: "2024-01-21T14:00:00.000Z"
//   },
//   {
//     id: 16,
//     name: "styles.css",
//     type: "css",
//     url: "/Projects/Web/Portfolio/styles.css",
//     parent: 10, // ID of 'portfolio-project' folder
//     size: 4096,
//     createdAt: "2024-01-21T11:00:00.000Z",
//     updatedAt: "2024-01-22T15:00:00.000Z"
//   },
//   {
//     id: 17,
//     name: "script.js",
//     type: "js",
//     url: "/Projects/Web/Portfolio/script.js",
//     parent: 10, // ID of 'portfolio-project' folder
//     size: 6144,
//     createdAt: "2024-01-22T12:00:00.000Z",
//     updatedAt: "2024-01-23T16:00:00.000Z"
//   },
//   {
//     id: 18,
//     name: "app.js",
//     type: "js",
//     url: "/Projects/Mobile/ReactNative/app.js",
//     parent: 11, // ID of 'react-native-project' folder
//     size: 8192,
//     createdAt: "2024-02-15T09:00:00.000Z",
//     updatedAt: "2024-02-16T13:00:00.000Z"
//   },
//   {
//     id: 19,
//     name: "components.js",
//     type: "js",
//     url: "/Projects/Mobile/ReactNative/components.js",
//     parent: 11, // ID of 'react-native-project' folder
//     size: 10240,
//     createdAt: "2024-02-16T10:00:00.000Z",
//     updatedAt: "2024-02-17T14:00:00.000Z"
//   },
//   {
//     id: 20,
//     name: "api_client.js",
//     type: "js",
//     url: "/Projects/Mobile/ReactNative/api_client.js",
//     parent: 11, // ID of 'react-native-project' folder
//     size: 12288,
//     createdAt: "2024-02-17T11:00:00.000Z",
//     updatedAt: "2024-02-18T15:00:00.000Z"
//   },
//   {
//     id: 21,
//     name: "Project plan.xlsx",
//     type: "xlsx",
//     url: "/Projects/Project plan.xlsx",
//     parent: 9, // ID of 'projects' folder
//     size: 76800,
//     createdAt: "2024-02-01T11:00:00.000Z",
//     updatedAt: "2024-02-02T15:00:00.000Z"
//   },
//   {
//     id: 22,
//     name: "Design mockups.zip",
//     type: "zip",
//     url: "/Projects/Design mockups.zip",
//     parent: 9, // ID of 'projects' folder
//     size: 1536000,
//     createdAt: "2024-02-10T14:00:00.000Z",
//     updatedAt: "2024-02-11T10:00:00.000Z"
//   }
// ];
// export const folders: Folder[] = [
//   {
//     id: 1,
//     name: "My Drive",
//     type: "folder", // 📁 Added type for consistency
//     url: "/", // 🌐 Added URL for root folder
//     parent: null,
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-01T10:00:00.000Z"
//   },
//   {
//     id: 2,
//     name: "Games",
//     type: "folder", // 📁 Added type for consistency
//     url: "/Games", // 🎮 Added URL for Games folder
//     parent: 1, // ID of 'My Drive' folder
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-01T10:00:00.000Z"
//   },
//   {
//     id: 3,
//     name: "Documents",
//     type: "folder", // 📁 Added type for consistency
//     url: "/Documents", // 📄 Added URL for Documents folder
//     parent: 1, // ID of 'My Drive' folder
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-01T10:00:00.000Z"
//   },
//   {
//     id: 4,
//     name: "Pictures",
//     type: "folder", // 📁 Added type for consistency
//     url: "/Pictures", // 🖼️ Added URL for Pictures folder
//     parent: 1, // ID of 'My Drive' folder
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-01T10:00:00.000Z"
//   },
//   {
//     id: 5,
//     name: "Projects",
//     type: "folder", // 📁 Added type for consistency
//     url: "/Projects", // 💼 Added URL for Projects folder
//     parent: 1, // ID of 'My Drive' folder
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-01T10:00:00.000Z"
//   },
//   {
//     id: 6,
//     name: "Personal",
//     type: "folder", // 📁 Added type for consistency
//     url: "/Documents/Personal", // 👤 Added URL for Personal folder
//     parent: 3, // ID of 'Documents' folder
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-01T10:00:00.000Z"
//   },
//   {
//     id: 7,
//     name: "Work",
//     type: "folder", // 📁 Added type for consistency
//     url: "/Documents/Work", // 💼 Added URL for Work folder
//     parent: 3, // ID of 'Documents' folder
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-01T10:00:00.000Z"
//   },
//   {
//     id: 100,
//     name: "Travel", // 🌴 Simplified from 'Pictures/Travel'
//     type: "folder", // 📁 Added type for consistency
//     url: "/Pictures/Travel", // 🏝️ Added URL for Travel folder
//     parent: 4, // ID of 'Pictures' folder
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-01T10:00:00.000Z"
//   },
//   {
//     id: 9,
//     name: "Family", // 👨‍👩‍👧‍👦 Simplified from 'Pictures/Family'
//     type: "folder", // 📁 Added type for consistency
//     url: "/Pictures/Family", // 👪 Added URL for Family folder
//     parent: 4, // ID of 'Pictures' folder
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-01T10:00:00.000Z"
//   },
//   {
//     id: 10,
//     name: "Web", // 🌐 Simplified from 'Projects/Web'
//     type: "folder", // 📁 Added type for consistency
//     url: "/Projects/Web", // 🌍 Added URL for Web folder
//     parent: 5, // ID of 'Projects' folder
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-01T10:00:00.000Z"
//   },
//   {
//     id: 11,
//     name: "Mobile", // 📱 Simplified from 'Projects/Mobile'
//     type: "folder", // 📁 Added type for consistency
//     url: "/Projects/Mobile", // 📲 Added URL for Mobile folder
//     parent: 5, // ID of 'Projects' folder
//     createdAt: "2024-03-01T10:00:00.000Z",
//     updatedAt: "2024-03-01T10:00:00.000Z"
//   }
// ];


// Mock Folder Data
export const folders: Folder[] = [
  {
    id: 1000001,
    name: "My Drive",
    type: "folder",
    url: "/",
    parent: null,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000002,
    name: "Web Projects",
    type: "folder",
    url: "/Web Projects",
    parent: 1000001,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000003,
    name: "Mobile Projects",
    type: "folder",
    url: "/Mobile Projects",
    parent: 1000001,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000004,
    name: "Resources",
    type: "folder",
    url: "/Resources",
    parent: 1000001,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000005,
    name: "Travel & Photography",
    type: "folder",
    url: "/Travel & Photography",
    parent: 1000001,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000006,
    name: "Work & Personal Docs",
    type: "folder",
    url: "/Work & Personal Docs",
    parent: 1000001,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000007,
    name: "Miscellaneous",
    type: "folder",
    url: "/Miscellaneous",
    parent: 1000001,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000008,
    name: "Portfolio",
    type: "folder",
    url: "/Web Projects/Portfolio",
    parent: 1000002,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000009,
    name: "ReactNativeApp",
    type: "folder",
    url: "/Mobile Projects/ReactNativeApp",
    parent: 1000003,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000010,
    name: "Web Resources",
    type: "folder",
    url: "/Resources/Web",
    parent: 1000004,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000011,
    name: "Photography",
    type: "folder",
    url: "/Travel & Photography/Photography",
    parent: 1000005,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000012,
    name: "Personal Docs",
    type: "folder",
    url: "/Work & Personal Docs/Personal",
    parent: 1000006,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
  {
    id: 1000013,
    name: "Tax Documents",
    type: "folder",
    url: "/Work & Personal Docs/Tax",
    parent: 1000006,
    createdAt: "2024-03-01T10:00:00.000Z",
    updatedAt: "2024-03-01T10:00:00.000Z",
  },
];

// Mock File Data
export const files: File[] = [
  {
    id: 1000101,
    name: "portfolio_index.html",
    type: "html",
    url: "/Web Projects/Portfolio/index.html",
    parent: 1000008,
    size: 2048,
    createdAt: "2024-01-20T10:00:00.000Z",
    updatedAt: "2024-01-21T14:00:00.000Z",
  },
  {
    id: 1000102,
    name: "portfolio_styles.css",
    type: "css",
    url: "/Web Projects/Portfolio/styles.css",
    parent: 1000008,
    size: 4096,
    createdAt: "2024-01-21T11:00:00.000Z",
    updatedAt: "2024-01-22T15:00:00.000Z",
  },
  {
    id: 1000103,
    name: "portfolio_script.js",
    type: "js",
    url: "/Web Projects/Portfolio/script.js",
    parent: 1000008,
    size: 6144,
    createdAt: "2024-01-22T12:00:00.000Z",
    updatedAt: "2024-01-23T16:00:00.000Z",
  },
  {
    id: 1000104,
    name: "react_native_app.js",
    type: "js",
    url: "/Mobile Projects/ReactNativeApp/app.js",
    parent: 1000009,
    size: 8192,
    createdAt: "2024-02-15T09:00:00.000Z",
    updatedAt: "2024-02-16T13:00:00.000Z",
  },
  {
    id: 1000105,
    name: "travel_photo_1.jpeg",
    type: "jpeg",
    url: "/Travel & Photography/Photography/travel_photo_1.jpeg",
    parent: 1000011,
    size: 204800,
    createdAt: "2024-01-10T10:00:00.000Z",
    updatedAt: "2024-01-10T10:00:00.000Z",
  },
  {
    id: 1000106,
    name: "travel_photo_2.png",
    type: "png",
    url: "/Travel & Photography/Photography/travel_photo_2.png",
    parent: 1000011,
    size: 286720,
    createdAt: "2024-01-12T14:00:00.000Z",
    updatedAt: "2024-01-12T14:00:00.000Z",
  },
  // Under Tax Documents 1000013
  {
    id: 1000109,
    name: "Office Leave 2022",
    type: "pdf",
    url: "/Work & Personal Docs/Tax/Office Leave 2022.pdf",
    parent: 1000012,
    size: 102400,
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
  },
  {
    id: 1000110,
    name: "Office Leave 2023",
    type: "pdf",
    url: "/Work & Personal Docs/Tax/Office Leave 2023.pdf",
    parent: 1000012,
    size: 102400,
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
  },
  {
    id: 1000111,
    name: "Group Pic 2022",
    type: "png",
    url: "/Work & Personal Docs/Tax/Group Pic 2022.png",
    parent: 1000012,
    size: 102400,
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
  },

  {
    id: 1000107,
    name: "Income Tax 2022",
    type: "pdf",
    url: "/Work & Personal Docs/Tax/Income Tax 2022.pdf",
    parent: 1000013,
    size: 102400,
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
  },
  {
    id: 1000108,
    name: "Income Tax 2023",
    type: "pdf",
    url: "/Work & Personal Docs/Tax/Income Tax 2023.pdf",
    parent: 1000013,
    size: 102400,
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
  },
  // For Web Resources 1000010
  {
    id: 1000112,
    name: "Web Resources 1",
    type: "pdf",
    url: "/Resources/Web/Web Resources 1.pdf",
    parent: 1000010,
    size: 102400,
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
  },
  {
    id: 1000113,
    name: "Web Resources 2",
    type: "pdf",
    url: "/Resources/Web/Web Resources 2.pdf",
    parent: 1000010,
    size: 102400,
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
  },
  {
    id: 1000114,
    name: "Web Resources 3",
    type: "pdf",
    url: "/Resources/Web/Web Resources 3.pdf",
    parent: 1000010,
    size: 102400,
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
  },

];
