const Page = async ({ params }) => {
  const id = params.id;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_API_KEY,
    },
  };

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);

  const data = await res.json();

  return (
    <section className="flex justify-center p-12">
      <div className="text-center">
        <h1 className="font-bold text-3xl pb-4">{data.title}</h1>
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
          <img
            className="md:w-6/12 md:rounded-l-lg"
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt={data.title}
          />
          <div className="md:w-6/12 dark:bg-slate-700 bg-gray-100 md:rounded-r-lg flex flex-col justify-center gap-4 p-4 overflow-auto">
            <p className="text-lg">{data.overview}</p>
            <p>Release Date: {data.release_date}</p>
            <p>Average Vote: {data.vote_average.toString().slice(0, 3)}</p>
            <div className="flex justify-center gap-4">
              {data.genres.map((genre, id) => (
                <span
                  className="p-2 border rounded-lg dark:bg-cyan-900 bg-slate-300"
                  key={id}
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <a href={data.homepage} target="_blank">
              <button className="p-4 border rounded-lg hover:opacity-50 w-full">
                Page
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
