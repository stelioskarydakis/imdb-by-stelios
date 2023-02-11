import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillLike } from "react-icons/ai";

const Card = ({ result }) => {
  const {
    id,
    original_title,
    release_date,
    first_air_date,
    title,
    name,
    overview,
    backdrop_path,
    poster_path,
    vote_count,
  } = result;
  const imgBasePath = "https://image.tmdb.org/t/p/original";
  const notFoundImg = "/not-found.png";
  const img =
    !backdrop_path && !poster_path
      ? notFoundImg
      : `${imgBasePath}${backdrop_path || poster_path}`;

  return (
    <div className="group mb-5 sm:mb-0 cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg border border-slate-400  sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${id}`}>
        <Image
          src={`${img}`}
          width={500}
          height={300}
          alt={original_title || title || name}
          className="rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{
            maxWidth: "100%",
            height: "auto",
            width: "100%",
            maxHeight: "213px",
            objectFit: "cover",
          }}
        />
        <div className="p-2 flex flex-col justify-between h-full max-h-24 sm:bg-transparent">
          <div>
            <h3 className="truncate text-lg font-bold">
              {original_title || title || name}
            </h3>
            <p className="truncate font-semibold">{overview}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">{release_date || first_air_date}</p>
            <p className="text-sm flex">
              <AiFillLike className="text-amber-600 text-lg mr-1" />{" "}
              <span>{vote_count}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
