export type Project = {
  name: string;
  period: string;
  role: string;
  highlights: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  projects: Project[];
  highlights?: string[]; // company-level
};

export type Education = {
  degree: string;
  location: string;
  period: string;
  school?: string;
  details: string[];
  links?: { label: string; href: string }[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const intro =
  "I'm an engineer with six years of experience building Unity mobile apps, three of them published on iOS and Android, spanning IoT-connected devices, computer vision, and interactive 3D. I have also built and published a full-stack fitness app on my own, from the database and PHP API to the mobile front end. I recently completed an MSc in Artificial Intelligence in Ireland, where my thesis studied how AI-generated synthetic videos can augment limited real data for vision-based fall detection, and I published the resulting dataset on GitHub. Now I'm building tool-using AI agents that connect software, devices, and people, and writing about what breaks along the way.";

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer (Unity)",
    company: "AISA Innotech Inc.",
    period: "May 2019 – Aug 2025",
    projects: [
      {
        name: "Metaverse Social App",
        period: "2024 – 2025",
        role: "Lead Engineer",
        highlights: [
          "Built a 3D plaza modeled on the area around Taipei 101 in Unity (C#), with Photon Fusion multiplayer for shared scenes, avatar movement, and real-time text chat on iOS and Android.",
          "Added a virtual lecture hall where speakers present slides on an in-scene projection screen, and recreated real Taiwan landmarks using OpenStreetMap-based assets.",
        ],
      },
      {
        name: "Fashion App",
        period: "2022 – 2023",
        role: "Lead Engineer",
        highlights: [
          "Built OpenCV virtual makeup for an e-commerce platform: face detection and landmark segmentation into lips, eyeshadow and eyebrows, with color blending.",
          "Built clothing try-on from full-body photos: used OpenCV to locate the body and split it into upper and lower regions, then scaled background-removed garments to shoulder width, with manual adjustment for fit.",
          "Led one engineer and one UI designer; mentored the engineer on Unity SDK selection and testing, then integrated his live-streaming module into the main app.",
        ],
      },
      {
        name: "Smart Coffee Scale App",
        period: "2021 – 2022",
        role: "Lead Engineer (sole developer)",
        highlights: [
          "Integrated the hardware vendor's Bluetooth API and refreshed the UI every 0.25 s for continuous real-time pour-over tracking.",
          "Implemented automatic Bluetooth reconnection and local storage of brew records and scale settings.",
        ],
      },
      {
        name: "Smart IoT Plug App",
        period: "2019 – 2021",
        role: "Front-end Engineer",
        highlights: [
          "Built usage-statistics UI and alert notifications, and connected backend APIs with a teammate.",
          "Implemented a voice interface with keyword-triggered commands and text-to-speech replies.",
        ],
      },
    ],
    highlights: [
      "Handled App Store and Google Play releases end to end for three production apps.",
    ],
  },
  {
  role: "Solo Developer",
  company: "Independent project",
  period: "[2020 – 2021]",
  projects: [
    {
      name: "Fitness & Nutrition Tracking App",
      period: "[2020 – 2021]",
      role: "Founder & Sole Developer",
      highlights: [
        "Built the app end to end: designed the MySQL database for user accounts and daily food logs, wrote the PHP API, and developed the Unity (C#) mobile front end.",
        "Published on Google Play and the App Store; reached about 3,000 registered users with no promotion.",
      ],
    },
  ],
},
];

export const education: Education[] = [
  {
  degree: "MSc in Artificial Intelligence",
  school: "National College of Ireland (NCI)",
  location: "Dublin, Ireland",
  period: "2025 – 2026",
  details: [
    "Thesis: vision-based bed-fall detection using YOLOv8 pose keypoints and a classifier, augmented with 170 AI-generated synthetic videos (85 fall, 85 non-fall) made with Mage.space.",
    "Synthetic augmentation raised ROC-AUC from 0.821 to 0.875 and PR-AUC from 0.772 to 0.863, and cut the false-positive rate by about 55%.",
    "With a tuned decision threshold, sensitivity and specificity both reached about 0.80, versus about 0.76 for the real-data baseline.",
    "Grade: First Class Honours",
  ],
  links: [
    {
      label: "Synthetic video dataset (GitHub)",
      href: "https://github.com/leowulab/T2V-Bed-Fall-Detection-Dataset",
    },
  ],
  },
  {
    degree: "Bachelor of Computer Science and Information Engineering",
    school: "Minghsin University of Science and Technology (MUST)",
    location: "Taiwan",
    period: "2021 – 2023",
    details: [
      "GPA: 3.9 / 4.0",
      "Project: a panoramic multimedia interactive tour guide application.",
      "Completed while working full-time as a software engineer."
    ],
  },
  {
    degree: "Bachelor of Applied Japanese",
    school: "Aletheia University (AU)",
    location: "Taiwan",
    period: "2010 – 2014",
    details: [],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["C#", "Python"],
  },
  {
    title: "Mobile & Real-time 3D",
    items: ["Unity", "iOS & Android release", "Photon Fusion"],
  },
  {
    title: "AI & Computer Vision",
    items: ["OpenCV", "YOLOv8", "Pose Estimation"],
  },
  {
    title: "IoT & Edge",
    items: [
      "Bluetooth device integration",
      "Hardware vendor API integration",
      "Raspberry Pi",
    ],
  },
  {
    title: "Currently building with",
    items: ["LLM Tool Calling", "WebSocket"],
  },
  {
  title: "Backend & Data",
  items: ["PHP", "MySQL", "API development"],
  },
];

export const additional =
  "Four years of producing event videos for charity activities.";