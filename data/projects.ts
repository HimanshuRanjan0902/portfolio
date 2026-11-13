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
    slug: "linklite",
    title: "LinkLite",
    description:
      "A full-stack URL shortener with custom aliases, optional link expiration, account authentication, link management, and click analytics.",
    tags: ["React", "Vite", "Node.js", "Express", "Firebase", "JWT"],
    gradient: "from-aurora-cyan to-aurora-indigo",
    liveUrl: "https://linklite-ashen.vercel.app/",
    repoUrl: "https://github.com/HimanshuRanjan0902/LinkLite",
    year: "2026",
    role: "Full-Stack Developer",
    overview:
      "LinkLite is a full-stack URL-shortening application. Users can create compact links, choose memorable custom aliases, optionally set an expiration date, and manage their links from an authenticated dashboard. A click analytics view summarizes link activity.",
    challenge:
      "The main engineering challenge was connecting a React frontend to a separately deployed Express API while protecting user-specific link operations. The application uses JWT authentication, Firebase Firestore for persistence, server-side URL and expiry validation, and rate limiting on authentication, link creation, and redirect routes.",
    features: [
      "User signup and login with hashed passwords",
      "JWT-protected user dashboard and link operations",
      "Short URL generation with optional custom aliases",
      "Optional expiration date and expired-link handling",
      "Edit destination URLs and expiration settings",
      "Delete links owned by the signed-in user",
      "Click tracking and per-account analytics",
      "HTTP/HTTPS URL validation",
      "Rate limiting and security headers",
      "Responsive React interface",
    ],
    techStack: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "Node.js",
      "Express.js",
      "Firebase Admin SDK",
      "Cloud Firestore",
      "JWT",
      "bcryptjs",
      "express-rate-limit",
      "Helmet",
      "Vercel",
      "Render",
    ],
    workflow: [
      "Create an account or sign in to access the dashboard.",
      "Paste a destination URL and optionally choose a custom alias and expiration date.",
      "Create the short link and copy or open it from the dashboard.",
      "Manage saved links by editing their destination or expiry, or deleting them.",
      "Review total links and click counts in the analytics section.",
    ],
    implementationNotes: [
      "The React/Vite frontend is deployed on Vercel at https://linklite-ashen.vercel.app/.",
      "The Node.js/Express API is deployed on Render at https://linklite-backend-zuor.onrender.com.",
      "Firebase Admin SDK connects to Cloud Firestore using a service-account JSON value stored as a Render environment variable; the credential file is excluded from Git.",
      "The backend uses JWT authentication, bcrypt password hashing, Helmet security headers, request-size limits, and express-rate-limit.",
      "The source code is available at https://github.com/HimanshuRanjan0902/LinkLite.",
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
