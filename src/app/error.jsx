"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center m-auto flex justify-center flex-col items-center mt-[25%]">
      <h2 className="pb-2">Something went wrong</h2>
      <button onClick={() => reset()} className="text-amber-600">
        Try again
      </button>
    </div>
  );
};

export default Error;
