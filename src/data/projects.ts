export type ProjectStatus = "In progress" | "Completed";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  tags: string[];
  problem: string;
  approach: string[];
  challenges: { title: string; detail: string }[];
  note?: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "hr-policy-agent",
    title: "HR Policy Agent",
    summary:
      "A tool-using agent that answers company policy questions with cited sources, checks leave balances, and drafts emails for human approval.",
    status: "In progress",
    tags: ["RAG", "MCP", "Tool Calling", "Next.js"],
    problem:
      "Employees spend time searching policy documents and asking HR the same questions. The goal is an assistant that gives grounded answers and can also take simple actions, without making things up or acting without consent.",
    approach: [
      "Ingest synthetic policy documents into a vector store for retrieval",
      "Expose leave balance lookup and email drafting as MCP tools",
      "Require explicit human confirmation before any email is sent",
      "Show the cited policy passages next to every answer",
    ],
    challenges: [
      {
        title: "Reducing hallucinated answers",
        detail:
          "Answers must be traceable to a source passage, and the agent should decline when no relevant policy is found.",
      },
      {
        title: "Making actions safe",
        detail:
          "Actions with side effects go through a confirm step so the user stays in control.",
      },
      {
        title: "Measuring quality",
        detail:
          "A fixed set of test questions to track retrieval accuracy as the system changes.",
      },
    ],
    note: "All documents and employee data in this project are synthetic.",
    links: [],
  },
  {
    slug: "unity-game-agent",
    title: "Unity Game-Playing Agent",
    summary:
      "An LLM agent that plays a small Unity game at runtime through MCP tools, evaluated on win rate, steps, and cost.",
    status: "In progress",
    tags: ["Unity", "C#", "MCP", "Agents"],
    problem:
      "How can an LLM reliably perceive and act inside a live game? Most existing Unity MCP tooling targets the editor; this project focuses on an agent that plays the game at runtime and can be measured.",
    approach: [
      "Build a small, single-scene game with a clear win condition",
      "Provide observation tools (game state) and action tools (move, use item) through an MCP server",
      "Validate every action before it reaches the game",
      "Log each run to compare prompts and models",
    ],
    challenges: [
      {
        title: "Compact state representation",
        detail:
          "Deciding what the model needs to see so decisions improve without wasting tokens.",
      },
      {
        title: "Invalid actions and recovery",
        detail:
          "Detecting illegal moves and giving the agent useful feedback to correct itself.",
      },
      {
        title: "Latency in real-time play",
        detail:
          "Balancing model response time against game speed, for example with turn-based or paused steps.",
      },
      {
        title: "Evaluation",
        detail:
          "Tracking win rate, step count, invalid-action rate, and token cost across runs.",
      },
    ],
    links: [],
  },
  {
    slug: "edge-fall-detection-agent",
    title: "Edge Fall-Detection Agent",
    summary:
      "Fall detection running on a Raspberry Pi, exposed as MCP tools so an agent can answer questions and adjust settings in natural language.",
    status: "In progress",
    tags: ["Edge AI", "Raspberry Pi", "YOLOv8", "MQTT", "MCP"],
    problem:
      "Fall detection research often stops at a model. This project turns my Master's thesis work into a working edge system that processes video locally and can be queried and configured through an agent.",
    approach: [
      "Extract body keypoints with YOLOv8 pose estimation on the Raspberry Pi",
      "Classify falls from the keypoints, based on my thesis approach",
      "Publish events over MQTT",
      "Expose tools such as get_current_status, get_recent_events, and set_sensitivity through an MCP server",
      "Store only keypoints and events, not raw video",
    ],
    challenges: [
      {
        title: "Real-time performance on the edge",
        detail:
          "Measuring FPS and latency, and comparing CPU-only inference with hardware acceleration.",
      },
      {
        title: "Reducing false alarms",
        detail:
          "Requiring the fall posture to persist before raising an alert, and tuning the trade-off with missed detections.",
      },
      {
        title: "Privacy by design",
        detail:
          "Processing locally and keeping no raw footage.",
      },
      {
        title: "Honest evaluation",
        detail:
          "Reporting false positives and false negatives instead of only headline accuracy.",
      },
    ],
    note: "A research and demonstration project, not a medical or emergency-response product.",
    links: [],
  },
];