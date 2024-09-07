import Tabs from "../components/Tabs";

const Page = async ({ searchParams }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTc1NzhjZjU4MTE2MDdhZGFlZDk1ZWM0ZjRhOTc5NiIsIm5iZiI6MTcyNTY5MjU1MS4wNDc3ODksInN1YiI6IjY2MjNjNTYwMmRkYTg5MDE4N2UwYzVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m-_bu2ZayI2UtLRBHuRS9-KTl9523t-CT3PvjK5UQCo",
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
      {data?.results?.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
