import MovieCard from "@/components/MovieCard";

const Page = async ({ params }) => {
  const search = params.search;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_API_KEY,
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}`,
    options
  );

  const data = await res.json();

  return (
    <section className="flex flex-wrap justify-center gap-12 p-12">
      {data?.results?.length === 0 && (
        <h1 className="text-2xl font-bold">No results found</h1>
      )}
      {data?.results?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default Page;
