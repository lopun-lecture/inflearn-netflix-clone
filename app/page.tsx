import Footer from "components/footer";
import Header from "components/header";
import MovieList from "components/movie-list";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <MovieList />
      <Footer />
    </main>
  );
}
