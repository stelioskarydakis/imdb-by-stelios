import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
  return (
    <div className="block sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto p-4">
      {results.map((result) => {
        return <Card key={result.id} result={result} />;
      })}
    </div>
  );
};

export default Results;
