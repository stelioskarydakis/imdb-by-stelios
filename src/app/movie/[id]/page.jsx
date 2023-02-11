import { API_KEY, BASE_URL } from "@/app/page";
import Image from "next/image";

async function getMovie(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return await res.json();
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  const {
    backdrop_path,
    poster_path,
    title,
    name,
    overview,
    release_date,
    first_air_date,
    vote_count,
  } = movie;
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center md:items-start content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path || poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg pt-4"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        ></Image>
        <div className="p-2">
          <h1 className="text-xl mb-3 font-bold text-amber-600">
            {title || name}
          </h1>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {release_date || first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
