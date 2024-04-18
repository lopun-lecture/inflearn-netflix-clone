export default function Footer() {
  return (
    <footer className="w-full p-2 fixed bottom-0 z-20 bg-gray-900 text-white text-center font-bold">
      Movie Database powered by{" "}
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        className="text-light-blue-400"
      >
        TMDB
      </a>
    </footer>
  );
}
