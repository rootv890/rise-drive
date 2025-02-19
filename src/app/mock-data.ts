
export type File = {
  id: string;
  name: string;
  type: string;
  url: string;
  parent: string;
  size: number;
  createdAt: string;
  updatedAt: string;
};

export type Folder = {
  id: string;
  name: string;
  type: string;
  url: string;
  parent: string | null; // null for root
  children?: ( File | Folder )[];
};



const mockFolders: Folder[] = [
  {
    id: "root",
    name: "My Drive",
    type: "folder",
    url: "/",
    parent: null,
    children: [
      {
        id: 'games',
        name: 'Games',
        type: 'folder',
        url: '/Games',
        parent: 'root',
        children: [
        ]
      },
      {
        id: "documents",
        name: "Documents",
        type: "folder",
        url: "/Documents",
        parent: "root",
        children: [
          {
            id: "personal-docs",
            name: "Personal",
            type: "folder",
            url: "/Documents/Personal",
            parent: "documents",
            children: [
              {
                id: "tax-docs",
                name: "Tax",
                type: "folder",
                url: "/Documents/Personal/Tax",
                parent: "personal-docs",
                children: [
                  {
                    id: "year-2022-tax",
                    name: "2022",
                    type: "folder",
                    url: "/Documents/Personal/Tax/2022",
                    parent: "tax-docs",
                    children: [
                      {
                        id: "file-w2-form",
                        name: "W2_Form.pdf",
                        type: "pdf",
                        url: "/Documents/Personal/Tax/2022/W2_Form.pdf",
                        parent: "year-2022-tax",
                        size: 65536,
                        createdAt: "2023-04-10T09:00:00.000Z",
                        updatedAt: "2023-04-11T13:00:00.000Z"
                      },
                      {
                        id: "file-1099-form",
                        name: "1099_Form.pdf",
                        type: "pdf",
                        url: "/Documents/Personal/Tax/2022/1099_Form.pdf",
                        parent: "year-2022-tax",
                        size: 73728,
                        createdAt: "2023-04-15T10:00:00.000Z",
                        updatedAt: "2023-04-16T14:00:00.000Z"
                      }
                    ]
                  }
                ]
              },
              {
                id: "file-id-card",
                name: "ID Card.pdf",
                type: "pdf",
                url: "/Documents/Personal/ID Card.pdf",
                parent: "personal-docs",
                size: 61440,
                createdAt: "2023-09-10T17:00:00.000Z",
                updatedAt: "2023-09-11T08:00:00.000Z"
              },
              {
                id: "file-passport-copy",
                name: "Passport copy.jpeg",
                type: "jpeg",
                url: "/Documents/Personal/Passport copy.jpeg",
                parent: "personal-docs",
                size: 122880,
                createdAt: "2023-08-15T13:00:00.000Z",
                updatedAt: "2023-08-16T19:00:00.000Z"
              }
            ]
          },
          {
            id: "work-docs",
            name: "Work",
            type: "folder",
            url: "/Documents/Work",
            parent: "documents",
            children: [
              {
                id: "client-docs",
                name: "Clients",
                type: "folder",
                url: "/Documents/Work/Clients",
                parent: "work-docs",
                children: [] // Example: Clients folder is empty in mock data
              },
              {
                id: "file-client-report",
                name: "Client Report Q3.pdf",
                type: "pdf",
                url: "/Documents/Work/Client Report Q3.pdf",
                parent: "work-docs",
                size: 92160,
                createdAt: "2024-03-01T10:00:00.000Z",
                updatedAt: "2024-03-02T16:00:00.000Z"
              },
              {
                id: "file-invoice",
                name: "Invoice #1234.docx",
                type: "docx",
                url: "/Documents/Work/Invoice #1234.docx",
                parent: "work-docs",
                size: 40960,
                createdAt: "2024-03-10T14:00:00.000Z",
                updatedAt: "2024-03-11T09:00:00.000Z"
              }
            ]
          },
          {
            id: "file-meeting-notes",
            name: "Meeting Notes.docx",
            type: "docx",
            url: "/Documents/Meeting Notes.docx",
            parent: "documents",
            size: 51200,
            createdAt: "2023-10-25T10:00:00.000Z",
            updatedAt: "2023-10-26T14:30:00.000Z"
          },
          {
            id: "file-project-proposal",
            name: "Project Proposal.pdf",
            type: "pdf",
            url: "/Documents/Project Proposal.pdf",
            parent: "documents",
            size: 102400,
            createdAt: "2023-11-15T09:00:00.000Z",
            updatedAt: "2023-11-15T09:00:00.000Z"
          }
        ]
      },
      {
        id: "pictures",
        name: "Pictures",
        type: "folder",
        url: "/Pictures",
        parent: "root",
        children: [
          {
            id: "travel-pics",
            name: "Travel",
            type: "folder",
            url: "/Pictures/Travel",
            parent: "pictures",
            children: [
              {
                id: "europe-pics",
                name: "Europe",
                type: "folder",
                url: "/Pictures/Travel/Europe",
                parent: "travel-pics",
                children: [
                  {
                    id: "file-eiffel-tower",
                    name: "Eiffel Tower.jpeg",
                    type: "jpeg",
                    url: "/Pictures/Travel/Europe/Eiffel Tower.jpeg",
                    parent: "europe-pics",
                    size: 204800,
                    createdAt: "2023-07-01T09:00:00.000Z",
                    updatedAt: "2023-07-01T09:00:00.000Z"
                  },
                  {
                    id: "file-colosseum",
                    name: "Colosseum.png",
                    type: "png",
                    url: "/Pictures/Travel/Europe/Colosseum.png",
                    parent: "europe-pics",
                    size: 286720,
                    createdAt: "2023-06-15T11:00:00.000Z",
                    updatedAt: "2023-06-16T17:00:00.000Z"
                  }
                ]
              }
            ]
          },
          {
            id: "family-pics",
            name: "Family",
            type: "folder",
            url: "/Pictures/Family",
            parent: "pictures",
            children: [
              {
                id: "christmas-pics",
                name: "Christmas",
                type: "folder",
                url: "/Pictures/Family/Christmas",
                parent: "family-pics",
                children: [
                  {
                    id: "file-christmas-2021",
                    name: "Christmas 2021.jpeg",
                    type: "jpeg",
                    url: "/Pictures/Family/Christmas 2021.jpeg",
                    parent: "christmas-pics",
                    size: 184320,
                    createdAt: "2022-12-25T14:00:00.000Z",
                    updatedAt: "2022-12-26T10:00:00.000Z"
                  },
                  {
                    id: "file-birthday-party",
                    name: "Birthday party.png",
                    type: "png",
                    url: "/Pictures/Family/Birthday party.png",
                    parent: "christmas-pics", // Corrected parent to christmas-pics (was family-pics which is incorrect nesting)
                    size: 245760,
                    createdAt: "2023-05-05T13:00:00.000Z",
                    updatedAt: "2023-05-06T19:00:00.000Z"
                  }
                ]
              }
            ]
          },
          {
            id: "file-vacation-photo",
            name: "Vacation Photo.jpeg",
            type: "jpeg",
            url: "/Pictures/Vacation Photo.jpeg",
            parent: "pictures",
            size: 256000,
            createdAt: "2024-01-05T16:00:00.000Z",
            updatedAt: "2024-01-05T16:00:00.000Z"
          },
          {
            id: "file-family-gathering",
            name: "Family gathering.png",
            type: "png",
            url: "/Pictures/Family gathering.png",
            parent: "pictures",
            size: 307200,
            createdAt: "2023-12-24T12:00:00.000Z",
            updatedAt: "2023-12-25T18:00:00.000Z"
          }
        ]
      },
      {
        id: "projects",
        name: "Projects",
        type: "folder",
        url: "/Projects",
        parent: "root",
        children: [
          {
            id: "web-projects",
            name: "Web",
            type: "folder",
            url: "/Projects/Web",
            parent: "projects",
            children: [
              {
                id: "portfolio-project",
                name: "Portfolio",
                type: "folder",
                url: "/Projects/Web/Portfolio",
                parent: "web-projects",
                children: [
                  {
                    id: "file-index-html",
                    name: "index.html",
                    type: "html",
                    url: "/Projects/Web/Portfolio/index.html",
                    parent: "portfolio-project",
                    size: 2048,
                    createdAt: "2024-01-20T10:00:00.000Z",
                    updatedAt: "2024-01-21T14:00:00.000Z"
                  },
                  {
                    id: "file-styles-css",
                    name: "styles.css",
                    type: "css",
                    url: "/Projects/Web/Portfolio/styles.css",
                    parent: "portfolio-project",
                    size: 4096,
                    createdAt: "2024-01-21T11:00:00.000Z",
                    updatedAt: "2024-01-22T15:00:00.000Z"
                  },
                  {
                    id: "file-script-js",
                    name: "script.js",
                    type: "js",
                    url: "/Projects/Web/Portfolio/script.js",
                    parent: "portfolio-project",
                    size: 6144,
                    createdAt: "2024-01-22T12:00:00.000Z",
                    updatedAt: "2024-01-23T16:00:00.000Z"
                  }
                ]
              }
            ]
          },
          {
            id: "mobile-projects",
            name: "Mobile",
            type: "folder",
            url: "/Projects/Mobile",
            parent: "projects",
            children: [
              {
                id: "react-native-project",
                name: "ReactNative",
                type: "folder",
                url: "/Projects/Mobile/ReactNative",
                parent: "mobile-projects",
                children: [
                  {
                    id: "file-app-js",
                    name: "app.js",
                    type: "js",
                    url: "/Projects/Mobile/ReactNative/app.js",
                    parent: "react-native-project",
                    size: 8192,
                    createdAt: "2024-02-15T09:00:00.000Z",
                    updatedAt: "2024-02-16T13:00:00.000Z"
                  },
                  {
                    id: "file-components-js",
                    name: "components.js",
                    type: "js",
                    url: "/Projects/Mobile/ReactNative/components.js",
                    parent: "react-native-project",
                    size: 10240,
                    createdAt: "2024-02-16T10:00:00.000Z",
                    updatedAt: "2024-02-17T14:00:00.000Z"
                  },
                  {
                    id: "file-api-client-js",
                    name: "api_client.js",
                    type: "js",
                    url: "/Projects/Mobile/ReactNative/api_client.js",
                    parent: "react-native-project",
                    size: 12288,
                    createdAt: "2024-02-17T11:00:00.000Z",
                    updatedAt: "2024-02-18T15:00:00.000Z"
                  }
                ]
              }
            ]
          },
          {
            id: "file-project-plan",
            name: "Project plan.xlsx",
            type: "xlsx",
            url: "/Projects/Project plan.xlsx",
            parent: "projects",
            size: 76800,
            createdAt: "2024-02-01T11:00:00.000Z",
            updatedAt: "2024-02-02T15:00:00.000Z"
          },
          {
            id: "file-design-mockups",
            name: "Design mockups.zip",
            type: "zip",
            url: "/Projects/Design mockups.zip",
            parent: "projects",
            size: 1536000,
            createdAt: "2024-02-10T14:00:00.000Z",
            updatedAt: "2024-02-11T10:00:00.000Z"
          }
        ]
      },
      {
        id: "file-readme",
        name: "readme.txt",
        type: "txt",
        url: "/readme.txt",
        parent: "root",
        size: 1024,
        createdAt: "2024-03-01T10:00:00.000Z",
        updatedAt: "2024-03-01T10:00:00.000Z"
      },
      {
        id: "file-profile",
        name: "profile.jpeg",
        type: "jpeg",
        url: "/profile.jpeg",
        parent: "root",
        size: 150000,
        createdAt: "2024-03-05T14:00:00.000Z",
        updatedAt: "2024-03-05T14:00:00.000Z"
      }
    ],
  },
];

export default mockFolders;
