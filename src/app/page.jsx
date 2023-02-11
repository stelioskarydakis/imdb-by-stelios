export const dynamic = "force-dynamic";

import Results from "./components/Results";

export const API_KEY = process.env.API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const kindOfFetch =
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week";

  const response = await fetch(
    `${BASE_URL}/${kindOfFetch}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  const results = data.results;

  return (
    <div className="max-w-6xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-medium text-amber-600 text-center">
        IMDb - by Stelios
      </h1>
      <Results results={results} />
    </div>
  );
}
