export const site = {
  name: "leowulab",
  title: "leowulab | AI & Mobile Engineer",
  description:
    "Tool-using AI agents across enterprise software, games, and edge devices, plus notes on what I build and what breaks along the way.",
  // 網址在第 8 步部署後再設定環境變數，開發時預設為本機
  url:
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://leowulab.com"
    : "http://localhost:3000"),
  github: "https://github.com/leowulab",
  linkedin: "https://www.linkedin.com/in/wukuanting-leo",
};