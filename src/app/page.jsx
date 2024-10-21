import MovieCard from "@/components/MovieCard";
import Tabs from "../components/Tabs";

const Page = async ({ searchParams }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_API_KEY,
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }`,
    options
  );

  const data = await res.json();

  return (
    <div>
      <Tabs />
      <section className="flex flex-wrap justify-center gap-12 p-12">
        {data?.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default Page;
