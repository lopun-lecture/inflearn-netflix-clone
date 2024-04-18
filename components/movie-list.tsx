"use client";

import { getMovies } from "actions/movie-actions";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/state";
import MovieCard from "./movie-card";
import { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

export default function MovieList() {
  const search = useRecoilValue(searchState);

  const { ref, inView } = useInView();

  const {
    data,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", { search }],
    queryFn: ({ pageParam = 1 }) =>
      getMovies({ search, page: pageParam, pageSize: 20 }),
    getNextPageParam: (lastPage) =>
      lastPage.page ? lastPage.page + 1 : undefined,
  });

  useEffect(() => {
    if (
      inView &&
      hasNextPage &&
      !isFetching &&
      !isFetchingNextPage &&
      !isFetchingPreviousPage
    ) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <div className="w-full grid md:grid-cols-4 grid-cols-3 gap-4 px-4 py-14">
      {data?.pages
        ?.map((page) => page.data)
        ?.flat()
        ?.map(
          (
            { image_url, title, overview, vote_average, release_date },
            index
          ) => (
            <MovieCard
              key={index}
              imageUrl={image_url}
              title={title}
              overview={overview}
              voteAverage={vote_average}
              releaseDate={release_date}
            />
          )
        )}
      <div ref={ref}></div>
    </div>
  );
}
