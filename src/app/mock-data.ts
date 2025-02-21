import { folders_table as FolderType, files_table as FileType } from "@/server/db/schema";

export type Folder = typeof FolderType.$inferInsert;
export type File = typeof FileType.$inferInsert;

export const folders: {
  name: string;
  url: string;
  type: string;
  parent: number | null;
  owner?: string | null;

}[] = [
    {
      name: "Web Projects",
      type: "folder",
      url: "/web-projects", // 🌐 Added specific URL

      parent: null, // repplace null with rootFolder id in sandbox page
    },
    {
      name: "Mobile Projects",
      type: "folder",
      url: '/mobile-projects', // 📱 Added specific URL

      parent: null,
    },
    {
      name: "Resources",
      type: "folder",
      url: '/resources', // 📚 Added specific URL

      parent: null,
    },
    {
      name: "Design Resources",
      type: "folder",
      url: '/resources/design', // 🎨 Added nested URL

      parent: 1000003, // Parent is Resources
    },
    {
      name: "Developer Resources",
      type: "folder",
      url: '/resources/developer', // 💻 Added nested URL

      parent: 1000003, // Parent is Resources
    },
    {
      name: "Travel & Photography",
      type: "folder",
      url: '/travel-photography', // 🌄 Added specific URL

      parent: null,
    },
    {
      name: "Work & Personal Docs",
      type: "folder",
      url: '/documents', // 📁 Added specific URL

      parent: null,
    },
    {
      name: "Miscellaneous",
      type: "folder",
      url: '/misc', // 🔀 Added specific URL

      parent: null,
    },
    {
      name: "Portfolio",
      type: "folder",
      url: '/web-projects/portfolio', // 🌐 Added nested URL

      parent: 1000001, // Parent is Web Projects
    },
    {
      name: "ReactNativeApp",
      type: "folder",
      url: '/mobile-projects/react-native', // 📱 Added nested URL

      parent: 1000002, // Parent is Mobile Projects
    },
    {
      name: "Web Resources",
      type: "folder",
      url: '/resources/web', // 🌍 Added nested URL

      parent: 1000003, // Parent is Resources
    },
    {
      name: "Photography",
      type: "folder",
      url: '/travel-photography/photos', // 📸 Added nested URL

      parent: 1000006, // Parent is Travel & Photography
    },
    {
      name: "Personal Docs",
      type: "folder",
      url: '/documents/personal', // 📄 Added nested URL

      parent: 1000007, // Parent is Work & Personal Docs
    },
    {
      name: "Tax Documents",
      type: "folder",
      url: '/documents/taxes', // 💸 Added nested URL

      parent: 1000007, // Parent is Work & Personal Docs
    },
  ];

// Mock File Data
export const files: {
  name: string,
  type: string,
  url?: string,
  owner?: string | null,
  parent: number | null,
  size: number,
  createdAt: Date,
  updatedAt: Date,
  fileKey?: string,
}[] = [
    {
      name: "portfolio_index.html",
      type: "html",
      url: '/web-projects/portfolio/index.html', // 🌐 Added file URL

      parent: 1000008,
      size: 2048,
      createdAt: new Date(), // 🌟 First creation moment captured!
      updatedAt: new Date(), // 📅 Last update timestamp
    },
    {
      name: "portfolio_styles.css",
      type: "css",
      url: '/web-projects/portfolio/styles.css', // 🎨 Added file URL
      parent: 1000008,
      size: 4096,
      createdAt: new Date(), // 🎨 Styling file born!
      updatedAt: new Date(), // 🔄 Potential future updates tracked
    },
    {
      name: "portfolio_script.js",
      type: "js",
      url: '/web-projects/portfolio/script.js', // 💻 Added file URL

      parent: 1000008,
      size: 6144,
      createdAt: new Date(), // 💻 JavaScript magic begins!
      updatedAt: new Date(), // 🚀 Ready for improvements
    },
    {
      name: "react_native_app.js",
      type: "js",
      url: '/mobile-projects/react-native/app.js', // 📱 Added file URL

      parent: 1000009,
      size: 8192,
      createdAt: new Date(), // 📱 Mobile app genesis
      updatedAt: new Date(), // 🔧 Continuous refinement
    },
    {
      name: "travel_photo_1.jpeg",
      type: "jpeg",
      url: '/travel-photography/photos/photo1.jpeg', // 🌄 Added file URL

      parent: 1000011,
      size: 204800,
      createdAt: new Date(), // 🌄 First travel memory captured
      updatedAt: new Date(), // 📸 Potentially edited
    },
    {
      name: "travel_photo_2.png",
      type: "png",
      url: '/travel-photography/photos/photo2.png', // 🏞️ Added file URL

      parent: 1000011,
      size: 286720,
      createdAt: new Date(), // 🏞️ Another travel snapshot
      updatedAt: new Date(), // 🖼️ Image might be refined
    },
    {
      name: "Office Leave 2022",
      type: "pdf",
      url: '/documents/personal/office-leave-2022.pdf', // 📄 Added file URL

      parent: 1000012,
      size: 102400,
      createdAt: new Date(), // 📄 2022 leave document
      updatedAt: new Date(), // 📋 Potentially updated
    },
    {
      name: "Office Leave 2023",
      type: "pdf",
      url: '/documents/personal/office-leave-2023.pdf', // 📝 Added file URL

      parent: 1000012,
      size: 102400,
      createdAt: new Date(), // 📝 2023 leave document
      updatedAt: new Date(), // 🔍 Tracked for changes
    },
    {
      name: "Group Pic 2022",
      type: "png",
      url: '/documents/personal/group-pic-2022.png', // 👥 Added file URL

      parent: 1000012,
      size: 102400,
      createdAt: new Date(), // 👥 Group photo from 2022
      updatedAt: new Date(), // 🖼️ Potential edits
    },
    {
      name: "Income Tax 2022",
      type: "pdf",
      url: '/documents/taxes/income-tax-2022.pdf', // 💸 Added file URL

      parent: 1000013,
      size: 102400,
      createdAt: new Date(), // 💸 2022 tax document
      updatedAt: new Date(), // 📊 Tracked for updates
    },
    {
      name: "Income Tax 2023",
      type: "pdf",
      url: '/documents/taxes/income-tax-2023.pdf', // 💰 Added file URL

      parent: 1000013,
      size: 102400,
      createdAt: new Date(), // 💰 2023 tax document
      updatedAt: new Date(), // 🧾 Potential modifications
    },
    {
      name: "Web Resources 1",
      type: "pdf",
      url: '/resources/web/resource1.pdf', // 🌐 Added file URL

      parent: 1000010,
      size: 102400,
      createdAt: new Date(), // 🌐 First web resource
      updatedAt: new Date(), // 📚 Potentially updated
    },
    {
      name: "Web Resources 2",
      type: "pdf",
      url: '/resources/web/resource2.pdf', // 🔗 Added file URL

      parent: 1000010,
      size: 102400,
      createdAt: new Date(), // 🔗 Second web resource
      updatedAt: new Date(), // 🌍 Tracked for changes
    },
    {
      name: "Web Resources 3",
      type: "pdf",
      url: '/resources/web/resource3.pdf', // 📖 Added file URL
      parent: 1000010,
      size: 102400,
      createdAt: new Date(), // 📖 Third web resource
      updatedAt: new Date(), // 🔬 Monitored for updates
    },
  ];
