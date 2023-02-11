import React from "react";
import { BASE_URL, API_KEY } from "@/app/page";
import Results from "@/app/components/Results";

const SearchPage = async ({ params }) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${params.searchTerm}&include_adult=false&page=1`
  );
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <h1 className="text-2xl font-medium text-amber-600 text-center">
        Search reults for: {`${params.searchTerm}`}
      </h1>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
