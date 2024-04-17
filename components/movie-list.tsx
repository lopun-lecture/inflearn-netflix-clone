"use client";

import { useQuery } from "@tanstack/react-query";
import { getMovies } from "actions/movie-actions";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/state";

export default function MovieList() {
  const search = useRecoilValue(searchState);

  const moviesQuery = useQuery({
    queryKey: ["movies", search],
    queryFn: () => getMovies({ search }),
  });

  return (
    <div className="w-full p-4 grid md:grid-cols-4 grid-cols-3 gap-4">
      {moviesQuery.data &&
        moviesQuery.data.map(
          (
            {
              image_url,
              title,
              overview,
              vote_average,
              release_date,
              poopularity,
            },
            index
          ) => (
            <div className="col-span-1 relative" key={index}>
              <img className="w-full" src={image_url} />
              <div className="flex flex-col text-center p-2 absolute top-0 bottom-0 left-0 right-0 items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300 bg-black">
                <div className="text-white text-xl mb-2 font-bold">{title}</div>
                <div className="text-white text-sm mb-2">
                  {overview.slice(0, 200)}
                  {overview.length > 200 ? "..." : ""}
                </div>
                <div className="text-white text-md">
                  <i className="fas fa-star" /> Vote Average :{" "}
                  {parseInt(vote_average)} / 10
                </div>
                <div className="text-white text-md">
                  Release Date : {release_date}
                </div>
              </div>
            </div>
          )
        )}
    </div>
  );
}
