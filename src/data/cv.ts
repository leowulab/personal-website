export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type Education = {
  degree: string;
  location: string;
  period: string;
  school?: string;
  details: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const intro =
  "I'm an engineer who spent six years building Unity mobile apps, from IoT-connected devices to computer vision and interactive 3D, and recently completed a Master's in Artificial Intelligence in Ireland. My thesis explored vision-based fall detection. Now I'm building tool-using AI agents that connect software, devices, and people, and writing about what breaks along the way.";

export const experience: Experience[] = [
  {
    // TODO: 確認正式職稱 ("Senior Unity Developer" 或 "Senior Software Engineer")
    role: "Senior Unity Developer",
    company: "AISA Innotech Inc.",
    period: "May 2019 – Aug 2025",
    highlights: [
      "Built and maintained mobile apps in Unity (C#) across IoT, computer vision, and interactive 3D products.",
      "Integrated smart devices, including a smart plug and a smart scale, with mobile apps.",
      "Implemented real-time virtual makeup using OpenCV.",
      "Developed features for a metaverse interactive application.",
      // TODO: 可補上（僅限真實且不涉及機密）：連線方式、效能數字(FPS)、上架資訊、指導同事或技術決策
    ],
  },
];

export const education: Education[] = [
  {
    // TODO: 確認學位正式名稱（MSc / MEng 等），並與首頁副標題的 "MSc in AI" 保持一致
    degree: "Master in Artificial Intelligence",
    // TODO: 若想公開，補上 school: "學校名稱",
    location: "Ireland",
    period: "2025 – 2026",
    details: [
      "Thesis: vision-based fall detection using YOLOv8 pose keypoints and classification.",
      // TODO: 可補資料集、主要成果、成績或相關課程
    ],
  },
];

// TODO: 只保留你在面試中答得出來的項目；Python 等請自行確認
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["C#", "Python", "TypeScript"],
  },
  {
    title: "Mobile & 3D",
    items: ["Unity", "Mobile App Development"],
  },
  {
    title: "AI & Computer Vision",
    items: ["YOLOv8", "Pose Estimation", "OpenCV"],
  },
  {
    title: "IoT & Edge",
    items: ["IoT Device Integration", "Raspberry Pi"],
  },
  {
    title: "Web",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Currently building with",
    items: ["MCP", "RAG", "MQTT", "LLM Tool Calling"],
  },
];

export const additional =
  "Four years of producing event videos for charity activities.";