"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const selected = searchParams.get("genre");

  const genres = [
    { name: "Popular Movies", value: "popular" },
    { name: "Top Rated", value: "top_rated" },
    { name: "Upcoming Movies", value: "upcoming" },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-8">
      <ul className="flex justify-center gap-12">
        {genres.map((genre) => (
          <li key={genre.value}>
            <Link href={`/?genre=${genre.value}`}>
              <button
                className={`px-4 py-2 dark:bg-slate-700 bg-slate-500 text-white rounded hover:opacity-70 transition-opacity ${
                  genre.value !== selected ? "opacity-60" : ""
                }`}
              >
                {genre.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tabs;
