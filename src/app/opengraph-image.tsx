import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Portfolio of an AI and full-stack engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ededed",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", fontSize: 32 }}>
            <span style={{ color: "#fafaf9" }}>leowu</span>
            <span style={{ color: "#5eead4" }}>lab</span>
            <div
                style={{
                width: 18,
                height: 4,
                marginLeft: 3,
                marginBottom: 4,
                background: "#5eead4",
                }}
            />
</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            I build AI-powered products that connect software, devices, and
            people.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 30,
              color: "#9ca3af",
            }}
          >
            {site.name} · AI & Full-stack Engineer
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}