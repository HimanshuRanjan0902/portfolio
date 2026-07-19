import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#09090f] text-white px-6 text-center">
      <h1 className="text-7xl font-bold text-cyan-400">404</h1>

      <p className="mt-4 text-xl">
        Page Not Found
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 hover:bg-cyan-600"
      >
        Go Home
      </Link>
    </main>
  );
}