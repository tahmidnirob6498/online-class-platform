import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center text-white">
      <p className="text-[rgb(190,247,34)] text-sm font-semibold">404 ERROR</p>

      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
        Page not found
      </h1>

      <p className="mt-4 max-w-md text-gray-400">
        Sorry, we couldn’t find the page you’re looking for.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-3xl bg-[rgb(190,247,34)] px-5 py-2 font-medium text-black hover:opacity-90"
      >
        Back to Home
      </Link>
    </main>
  );
}