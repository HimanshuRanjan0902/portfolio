export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  liveUrl?: string;
  repoUrl?: string;
  year: string;
  role: string;
  overview: string;
  challenge: string;
  features: string[];
  techStack: string[];
  workflow?: string[];
  implementationNotes?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "cravecraft",
    title: "CraveCraft",
    description:
      "A responsive food-ordering web application where users can explore the menu, add dishes to their bag, and place orders through a clean, modern interface.",
    tags: ["React", "JavaScript", "Node.js", "Express.js", "Tailwind CSS"],
    gradient: "from-aurora-cyan to-aurora-indigo",
    liveUrl: "https://cravecraft-three.vercel.app",
    repoUrl: "https://github.com/HimanshuRanjan0902/cravecraft",
    year: "2026",
    role: "Full-Stack Developer",
    overview:
      "CraveCraft is a responsive food-ordering web application. Customers can explore the menu, add dishes to their bag, review the cart, and place an order. The frontend is hosted on Vercel, while the Node.js/Express API runs as a separate service on Render.",
    challenge:
      "The key implementation task was deploying the frontend and API independently and configuring the production frontend to call the hosted backend rather than localhost. This also involved resolving the browser's cross-origin (CORS) requirements for API requests.",
    features: [
      "Responsive food ordering interface",
      "Food menu browsing and item selection",
      "Shopping bag/cart management",
      "Order placement confirmation",
      "React frontend deployed on Vercel",
      "Node.js and Express API deployed on Render",
      "Production frontend-to-backend API configuration",
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "Vercel", "Render"],
    workflow: [
      "Open the live storefront and browse the available food menu.",
      "Choose dishes and add them to the shopping bag.",
      "Review the bag and proceed through the order placement flow.",
      "See the order confirmation in the interface after a successful submission.",
    ],
    implementationNotes: [
      "The React frontend is deployed on Vercel at https://cravecraft-three.vercel.app.",
      "The Node.js and Express API is deployed separately on Render.",
      "MongoDB is not currently connected. The API falls back to in-memory mode, so order data is not persistent and may reset when the backend restarts.",
    ],
    featured: true,
  },
  {
    slug: "stocksense-ai",
    title: "StockSense AI",
    description:
      "A responsive stock market platform with live Indian market data, AI-assisted market insights, watchlists, portfolio tracking, and virtual paper trading.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Angel One SmartAPI"],
    gradient: "from-aurora-indigo to-aurora-cyan",
    liveUrl: "https://stocksense-ai-delta.vercel.app",
    repoUrl: "",
    year: "2026",
    role: "Full-Stack Developer",
    overview:
      "StockSense AI brings stock market information and portfolio simulation into one platform. It integrates Angel One SmartAPI for live market data and provides tools to follow stocks, review a portfolio, and practice trading with virtual funds.",
    challenge:
      "The main challenge was bringing market data, portfolio information, and a paper-trading workflow together in a responsive application while keeping simulated trades separate from real broker execution.",
    features: [
      "Live market data integration using Angel One SmartAPI",
      "Stock market dashboard with stock data and market insights",
      "Paper trading using virtual funds only, with no real-money trades",
      "Watchlist to follow selected stocks",
      "Portfolio tracking for simulated investments",
      "Responsive interface for desktop and mobile devices",
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Angel One SmartAPI",
      "JWT Authentication",
      "Recharts",
      "Lightweight Charts",
    ],
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
