"use client";

import Link from "next/link";

export default function MovieCard({
  imageUrl,
  title,
  overview,
  voteAverage,
  releaseDate,
}) {
  return (
    <Link href={`https://www.themoviedb.org/search?query=${title}`}>
      <div className="col-span-1 relative">
        <img className="w-full" src={imageUrl} />
        <div className="flex flex-col text-center p-2 absolute top-0 bottom-0 left-0 right-0 items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300 bg-black">
          <div className="text-white text-xl mb-2 font-bold">{title}</div>
          <div className="text-white text-sm mb-2">
            {overview.slice(0, 200)}
            {overview.length > 200 ? "..." : ""}
          </div>
          <div className="text-white text-md">
            <i className="fas fa-star" /> Vote Average : {parseInt(voteAverage)}{" "}
            / 10
          </div>
          <div className="text-white text-md">Release Date : {releaseDate}</div>
        </div>
      </div>
    </Link>
  );
}
