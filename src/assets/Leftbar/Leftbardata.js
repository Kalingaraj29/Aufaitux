export const data = [
  {
    id: 0,
    src: "FaBlackberry",
    name: "Dashboard",
  },
  {
    id: 1,
    src: "FaBloggerB",
    name: "New Registrations",
  },
  {
    id: 2,
    src: "FaBehance",
    name: "Companies",
    status: true,
  },
  {
    id: 3,
    src: "FaCentos",
    name: "Tasks and Requests",
  },
  {
    id: 4,
    src: "FaBity",
    name: "Billing",
  },
  {
    id: 5,
    src: "FaArtstation",
    name: "Reporting and analytics",
  },
];

export const bottom = [
  {
    id: 0,
    name: "Notifications",
  },
  {
    id: 1,
    name: "Help Center",
  },
];

export const filter = [
  {
    id: 0,
    status: true,
    count: 0,
    select: "Jurisdiction",
    option: [
      {
        id: 0,
        name: "Jurisdiction",
      },
      {
        id: 1,
        name: "BBC",
      },
      {
        id: 2,
        name: "CCD",
      },
      {
        id: 3,
        name: "XYZ",
      },
    ],
  },
  {
    id: 1,
    status: true,
    count: 0,
    select: "LegalForm",
    option: [
      {
        id: 0,
        name: "LegalForm",
      },
      {
        id: 1,
        name: "17",
      },
      {
        id: 2,
        name: "18",
      },
      {
        id: 3,
        name: "19",
      },
    ],
  },
  {
    id: 2,
    status: true,
    select: "Plans",
    count: 0,
    option: [
      {
        id: 0,
        name: "Plans",
      },
      {
        id: 1,
        name: "Freelance",
      },
      {
        id: 2,
        name: "Customer",
      },
      {
        id: 3,
        name: "Business",
      },
    ],
  },
  {
    id: 3,
    status: false,
    select: "Status",
    count: 0,
    option: [
      {
        id: 0,
        name: "Status",
      },
      {
        id: 1,
        name: "Freelance",
      },
      {
        id: 2,
        name: "Customer",
      },
      {
        id: 3,
        name: "Business",
      },
    ],
  },
  {
    id: 4,
    status: false,
    count: 0,
    select: "Date of Incorparation",
    option: [
      {
        id: 0,
        name: "Date of Incorparation",
      },
      {
        id: 1,
        name: "Freelance",
      },
      {
        id: 2,
        name: "Customer",
      },
      {
        id: 3,
        name: "Business",
      },
    ],
  },
  {
    id: 5,
    status: false,
    select: "Business",
    count: 0,
    option: [
      {
        id: 0,
        name: "Business",
      },
      {
        id: 1,
        name: "Freelance",
      },
      {
        id: 2,
        name: "Customer",
      },
      {
        id: 3,
        name: "Business",
      },
    ],
  },
];

export const addData = [
  {
    id: 0,
    name: "Status",
    index: 3,
  },
  {
    id: 1,
    name: "Date of Incorparation",
    index: 4,
  },
  {
    id: 2,
    name: "Business",
    index: 5,
  },
];

export const table = [
  { id: 1, status: true },
  { id: 2, status: false },
  { id: 3, status: false },
  { id: 4, status: false },
  { id: 5, status: false },
];

export const settingsData = [
  {
    id: 0,
    name: "Dashboard",
    icon: true,
    childflag: false,
    child: "Charts",
    children: false,
    childarray: [
      {
        id: 0,
        name: "Revenue",
      },
      {
        id: 1,
        name: "Third Party",
      },
      {
        id: 2,
        name: "Applications",
      },
      {
        id: 3,
        flag: true,
        name: "Company",
        childflag: false,
        childarray1: [
          {
            id: 0,
            name: "Revenue",
          },
          {
            id: 1,
            name: "Party",
          },
          {
            id: 2,
            name: "Applications",
          },
        ],
      },
    ],
    task: "tasks",
    transaction: "transaction",
  },
  {
    id: 1,
    icon: false,
    name: "New Registration",
  },
  {
    id: 2,
    name: "Companies",
    icon: true,
    childflag: false,
    child: "Tasks",
    childarray: [
      {
        id: 0,
        name: "Revenue",
      },
      {
        id: 1,
        name: "Third Party",
      },
      {
        id: 2,
        name: "Applications",
      },
      {
        id: 3,
        name: "Documents",
      },
      {
        id: 4,
        name: "Visa Center",
      },
    ],
  },
];
