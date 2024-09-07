const MovieCard = ({ movie }) => {
  return (
    <div className="flex w-96 rounded-lg relative group">
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="absolute bottom-0 p-4 bg-slate-700 text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out max-h-full overflow-auto">
        {movie.title && (
          <h1 className="text-xl font-bold mb-3">{movie.title}</h1>
        )}
        {movie.overview && <p>{movie.overview}</p>}
      </div>
    </div>
  );
};

export default MovieCard;
