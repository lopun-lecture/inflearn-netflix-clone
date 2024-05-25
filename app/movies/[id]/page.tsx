import { getMovie } from "actions/movie-actions";
import UI from "./ui";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const movie = await getMovie({ id: params.id });

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [movie.image_url],
    },
  };
}

export default async function Page({ params }) {
  console.log(params);
  const movie = await getMovie({ id: params.id });
  console.log(movie);

  return <UI movie={movie} />;
}
