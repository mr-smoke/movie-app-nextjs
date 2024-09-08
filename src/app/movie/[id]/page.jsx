const Page = async ({ params }) => {
  const id = params.id;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTc1NzhjZjU4MTE2MDdhZGFlZDk1ZWM0ZjRhOTc5NiIsIm5iZiI6MTcyNTY5MjU1MS4wNDc3ODksInN1YiI6IjY2MjNjNTYwMmRkYTg5MDE4N2UwYzVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m-_bu2ZayI2UtLRBHuRS9-KTl9523t-CT3PvjK5UQCo",
    },
  };

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);

  const data = await res.json();

  return (
    <section className="flex justify-center p-12">
      <div className="text-center">
        <h1 className="font-bold text-3xl pb-4">{data.title}</h1>
        <div className="flex">
          <img
            className="w-6/12 rounded-l-lg"
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt={data.title}
          />
          <div className="w-6/12 bg-slate-700 rounded-r-lg flex flex-col justify-center gap-4 p-4 overflow-auto">
            <p className="text-lg">{data.overview}</p>
            <p>Release Date: {data.release_date}</p>
            <p>Average Vote: {data.vote_average.toString().slice(0, 3)}</p>
            <div className="flex justify-center gap-4">
              {data.genres.map((genre, id) => (
                <span className="p-2 border rounded-lg bg-cyan-900" key={id}>
                  {genre.name}
                </span>
              ))}
            </div>
            <button className="p-4 border rounded-lg hover:opacity-50">
              <a href={data.homepage} target="_blank">
                Page
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
