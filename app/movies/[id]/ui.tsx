"use client";

export default function UI({
  movie: { image_url, title, overview, vote_average, release_date, popularity },
}) {
  // `https://www.themoviedb.org/search?query=${title}`
  return (
    <div className="w-full flex md:flex-row flex-col items-center h-screen px-6 bg-indigo-50">
      <img className="md:w-1/3" src={image_url} />
      <div className="md:w-2/3 p-8 flex flex-col gap-2">
        <div className="text-3xl mb-2 font-bold">Title: {title}</div>
        <div className="text-xl font-bold">Movie Overview</div>
        <div className="text-md mb-2 break-words">{overview}</div>
        <div className="text-md">
          <i className="fas fa-star" /> Vote Average : {parseInt(vote_average)}
          /10
        </div>
        <div className="text-md">
          Release Date : {new Date(release_date).toLocaleDateString("ko-KR")}
        </div>
      </div>
    </div>
  );
}
