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

  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-finance-tracker",
    title: "AI Personal Finance Tracker",
    description:
      "A finance dashboard that categorizes spending automatically, forecasts monthly cash flow, and surfaces savings suggestions from transaction patterns using an AI-assisted pipeline.",
    tags: ["Next.js", "Node.js", "MongoDB", "AI/LLM"],
    gradient: "from-aurora-indigo to-aurora-cyan",
    liveUrl: "",
    repoUrl: "https://github.com/himanshuranjan/ai-finance-tracker",
    year: "2025",
    role: "Solo full-stack developer",
    overview:
      "A finance dashboard built to remove the manual work of expense tracking. Transactions are imported, automatically categorized, and turned into a monthly forecast so the user can see where their money is headed, not just where it's been.",
    challenge:
      "Bank and card exports come in inconsistent formats with messy merchant names. The core problem was building a categorization pipeline reliable enough to trust without constant manual correction, while keeping the dashboard fast as transaction history grew.",
    features: [
      "Automatic transaction categorization from raw statement data",
      "Monthly cash-flow forecasting based on historical spending patterns",
      "Personalized savings suggestions surfaced from spending trends",
      "Interactive charts for category breakdowns and month-over-month trends",
    ],
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Recharts"],
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full MERN storefront with cart, checkout, order tracking, and an admin console for inventory and sales, built on a REST API with role-based auth.",
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
    gradient: "from-aurora-violet to-aurora-rose",
    liveUrl: "",
    repoUrl: "https://github.com/himanshuranjan/ecommerce-platform",
    year: "2025",
    role: "Solo full-stack developer",
    overview:
      "A complete online store covering the full purchase loop: browsing, cart, checkout, and order tracking, paired with an admin console for managing inventory and viewing sales.",
    challenge:
      "Keeping the customer-facing store and the admin console on one codebase without either slowing the other down, while making sure stock levels, orders, and payments stayed consistent under concurrent requests.",
    features: [
      "Product catalog with search, filtering, and category pages",
      "Cart and multi-step checkout with order confirmation",
      "Role-based auth separating customer and admin access",
      "Admin dashboard for inventory, orders, and sales overview",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Stripe"],
  },
  {
    slug: "campus-lost-found",
    title: "Campus Lost & Found",
    description:
      "A community reporting tool for university campuses where students post found or missing items, filter by location and category, and message finders directly.",
    tags: ["Next.js", "MongoDB", "TypeScript"],
    gradient: "from-aurora-cyan to-aurora-indigo",
    liveUrl: "",
    repoUrl: "https://github.com/himanshuranjan/campus-lost-found",
    year: "2024",
    role: "Solo full-stack developer",
    overview:
      "Built for a university campus where lost items usually get posted across scattered WhatsApp groups. This centralizes reporting so found and missing items live in one searchable place.",
    challenge:
      "Getting students to actually use a new tool instead of their group chats meant the reporting flow had to be faster than posting a photo to WhatsApp, while still capturing enough detail (location, category, timestamp) to make search useful.",
    features: [
      "Post a found or missing item with photo, category, and location",
      "Filterable feed by location, category, and date",
      "Direct messaging between the reporter and the item owner",
      "Status tracking so resolved items are marked and archived",
    ],
    techStack: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Tailwind CSS"],
  },
  {
    slug: "service-booking-portal",
    title: "Service Booking Portal",
    description:
      "A scheduling platform connecting customers with local service providers, with live availability, booking confirmations, and provider dashboards.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    gradient: "from-aurora-rose to-aurora-violet",
    liveUrl: "",
    repoUrl: "https://github.com/himanshuranjan/service-booking-portal",
    year: "2024",
    role: "Solo full-stack developer",
    overview:
      "A two-sided scheduling platform: customers browse local service providers and book open slots, while providers manage their availability and bookings from their own dashboard.",
    challenge:
      "Avoiding double-bookings when availability updates and booking requests can happen at the same time, and designing a calendar UI that stays clear on mobile where most bookings actually happen.",
    features: [
      "Live availability calendar per provider",
      "Booking confirmation flow with conflict prevention",
      "Provider dashboard for managing schedule and bookings",
      "Email confirmations on booking and cancellation",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "date-fns"],
  },
    {
    slug: "community-info-portal",
    title: "Community Information Portal",
    description:
      "A Django-powered hub for local announcements, events, and resources.",
    tags: ["Django", "Python", "PostgreSQL"],
    gradient: "from-aurora-indigo to-aurora-violet",

    liveUrl: "",
    repoUrl: "",

    year: "2024",
    role: "Solo Full-Stack Developer",

    overview:
      "A content hub for local community organizers.",

    challenge:
      "Built an easy-to-manage CMS with role-based permissions.",

    features: [
      "Announcements",
      "Events",
      "Resources",
      "Role Based Access",
    ],

    techStack: [
      "Django",
      "Python",
      "PostgreSQL",
      "Bootstrap",
    ],

    featured: false,
  },

  {
    slug: "student-feedback-system",
    title: "Student Feedback System",
    description:
      "A Django-based feedback management system where students submit feedback securely.",

    tags: ["Django", "Python", "SQLite"],

    gradient: "from-emerald-500 to-cyan-500",

    liveUrl: "",
    repoUrl: "",

    year: "2024",

    role: "Solo Full-Stack Developer",

    overview:
      "A complete feedback management portal.",

    challenge:
      "Created a secure system for collecting and managing student feedback.",

    features: [
      "Student Login",
      "Feedback Submission",
      "Admin Dashboard",
      "Feedback Reports",
      "Responsive Design",
    ],

    techStack: [
      "Django",
      "Python",
      "SQLite",
      "Bootstrap",
    ],

    featured: false,
  }

];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}