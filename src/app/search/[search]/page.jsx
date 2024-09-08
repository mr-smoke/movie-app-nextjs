import MovieCard from "@/components/MovieCard";

const Page = async ({ params }) => {
  const search = params.search;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTc1NzhjZjU4MTE2MDdhZGFlZDk1ZWM0ZjRhOTc5NiIsIm5iZiI6MTcyNTY5MjU1MS4wNDc3ODksInN1YiI6IjY2MjNjNTYwMmRkYTg5MDE4N2UwYzVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m-_bu2ZayI2UtLRBHuRS9-KTl9523t-CT3PvjK5UQCo",
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}`,
    options
  );

  const data = await res.json();

  console.log(data);

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
