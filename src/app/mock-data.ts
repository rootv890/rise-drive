import { folders_table as FolderType, files_table as FileType } from "@/server/db/schema";

export type Folder = typeof FolderType.$inferInsert;
export type File = typeof FileType.$inferInsert;

export const folders: {
  name: string;
  url: string;
  type: string;
  parent: number | null;
  owner: string | null;

}[] = [
    {
      name: "Web Projects",
      type: "folder",
      url: "/Web Projects",
      id: 1000001,
      parent: null, // repplace null with rootFolder id in sandbox page
    },
    {
      name: "Mobile Projects",
      type: "folder",
      url: "/Mobile Projects",
      id: 1000002,
      parent: null,
    },
    {
      name: "Resources",
      type: "folder",
      url: "/Resources",
      id: 1000003,
      parent: null,
    },
    {
      name: "Design Resources",
      type: "folder",
      url: "/Design Resources",
      id: 1000004,
      parent: 1000003, // Parent is Resources
    },
    {
      name: "Developer Resources",
      type: "folder",
      url: "/Developer Resources",
      id: 1000005,
      parent: 1000003, // Parent is Resources
    },
    {
      name: "Travel & Photography",
      type: "folder",
      url: "/Travel & Photography",
      id: 1000006,
      parent: null,
    },
    {
      name: "Work & Personal Docs",
      type: "folder",
      url: "/Work & Personal Docs",
      id: 1000007,
      parent: null,
    },
    {
      name: "Miscellaneous",
      type: "folder",
      url: "/Miscellaneous",
      id: 1000008,
      parent: null,
    },
    {
      name: "Portfolio",
      type: "folder",
      url: "/Web Projects/Portfolio",
      id: 1000009,
      parent: 1000001, // Parent is Web Projects
    },
    {
      name: "ReactNativeApp",
      type: "folder",
      url: "/Mobile Projects/ReactNativeApp",
      id: 1000010,
      parent: 1000002, // Parent is Mobile Projects
    },
    {
      name: "Web Resources",
      type: "folder",
      url: "/Resources/Web",
      id: 1000011,
      parent: 1000003, // Parent is Resources
    },
    {
      name: "Photography",
      type: "folder",
      url: "/Travel & Photography/Photography",
      id: 1000012,
      parent: 1000006, // Parent is Travel & Photography
    },
    {
      name: "Personal Docs",
      type: "folder",
      url: "/Work & Personal Docs/Personal",
      id: 1000013,
      parent: 1000007, // Parent is Work & Personal Docs
    },
    {
      name: "Tax Documents",
      type: "folder",
      url: "/Work & Personal Docs/Tax",
      id: 1000014,
      parent: 1000007, // Parent is Work & Personal Docs
    },
  ];

// Mock File Data
export const files: {
  name: string,
  type: string,
  url: string,
  id: number,
  owner?: string | null,
  parent: number | null,
  size: number,
  createdAt: Date,
  updatedAt: Date,
}[] = [
    {
      id: 1000101,
      name: "portfolio_index.html",
      type: "html",
      url: "/Web Projects/Portfolio/index.html",
      parent: 1000008,
      size: 2048,
      createdAt: new Date(), // 🌟 First creation moment captured!
      updatedAt: new Date(), // 📅 Last update timestamp
    },
    {
      id: 1000102,
      name: "portfolio_styles.css",
      type: "css",
      url: "/Web Projects/Portfolio/styles.css",
      parent: 1000008,
      size: 4096,
      createdAt: new Date(), // 🎨 Styling file born!
      updatedAt: new Date(), // 🔄 Potential future updates tracked
    },
    {
      id: 1000103,
      name: "portfolio_script.js",
      type: "js",
      url: "/Web Projects/Portfolio/script.js",
      parent: 1000008,
      size: 6144,
      createdAt: new Date(), // 💻 JavaScript magic begins!
      updatedAt: new Date(), // 🚀 Ready for improvements
    },
    {
      id: 1000104,
      name: "react_native_app.js",
      type: "js",
      url: "/Mobile Projects/ReactNativeApp/app.js",
      parent: 1000009,
      size: 8192,
      createdAt: new Date(), // 📱 Mobile app genesis
      updatedAt: new Date(), // 🔧 Continuous refinement
    },
    {
      id: 1000105,
      name: "travel_photo_1.jpeg",
      type: "jpeg",
      url: "/Travel & Photography/Photography/travel_photo_1.jpeg",
      parent: 1000011,
      size: 204800,
      createdAt: new Date(), // 🌄 First travel memory captured
      updatedAt: new Date(), // 📸 Potentially edited
    },
    {
      id: 1000106,
      name: "travel_photo_2.png",
      type: "png",
      url: "/Travel & Photography/Photography/travel_photo_2.png",
      parent: 1000011,
      size: 286720,
      createdAt: new Date(), // 🏞️ Another travel snapshot
      updatedAt: new Date(), // 🖼️ Image might be refined
    },
    {
      id: 1000109,
      name: "Office Leave 2022",
      type: "pdf",
      url: "/Work & Personal Docs/Tax/Office Leave 2022.pdf",
      parent: 1000012,
      size: 102400,
      createdAt: new Date(), // 📄 2022 leave document
      updatedAt: new Date(), // 📋 Potentially updated
    },
    {
      id: 1000110,
      name: "Office Leave 2023",
      type: "pdf",
      url: "/Work & Personal Docs/Tax/Office Leave 2023.pdf",
      parent: 1000012,
      size: 102400,
      createdAt: new Date(), // 📝 2023 leave document
      updatedAt: new Date(), // 🔍 Tracked for changes
    },
    {
      id: 1000111,
      name: "Group Pic 2022",
      type: "png",
      url: "/Work & Personal Docs/Tax/Group Pic 2022.png",
      parent: 1000012,
      size: 102400,
      createdAt: new Date(), // 👥 Group photo from 2022
      updatedAt: new Date(), // 🖼️ Potential edits
    },
    {
      id: 1000107,
      name: "Income Tax 2022",
      type: "pdf",
      url: "/Work & Personal Docs/Tax/Income Tax 2022.pdf",
      parent: 1000013,
      size: 102400,
      createdAt: new Date(), // 💸 2022 tax document
      updatedAt: new Date(), // 📊 Tracked for updates
    },
    {
      id: 1000108,
      name: "Income Tax 2023",
      type: "pdf",
      url: "/Work & Personal Docs/Tax/Income Tax 2023.pdf",
      parent: 1000013,
      size: 102400,
      createdAt: new Date(), // 💰 2023 tax document
      updatedAt: new Date(), // 🧾 Potential modifications
    },
    {
      id: 1000112,
      name: "Web Resources 1",
      type: "pdf",
      url: "/Resources/Web/Web Resources 1.pdf",
      parent: 1000010,
      size: 102400,
      createdAt: new Date(), // 🌐 First web resource
      updatedAt: new Date(), // 📚 Potentially updated
    },
    {
      id: 1000113,
      name: "Web Resources 2",
      type: "pdf",
      url: "/Resources/Web/Web Resources 2.pdf",
      parent: 1000010,
      size: 102400,
      createdAt: new Date(), // 🔗 Second web resource
      updatedAt: new Date(), // 🌍 Tracked for changes
    },
    {
      id: 1000114,
      name: "Web Resources 3",
      type: "pdf",
      url: "/Resources/Web/Web Resources 3.pdf",
      parent: 1000010,
      size: 102400,
      createdAt: new Date(), // 📖 Third web resource
      updatedAt: new Date(), // 🔬 Monitored for updates
    },
  ];
