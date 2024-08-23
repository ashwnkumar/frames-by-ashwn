import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custWhite text-custBlack">
      <h1 className="text-9xl font-medium">404</h1>
      <p className="text-3xl">
        This page either doesn't exist or the developer didn't do his job :/
      </p>
      <p className="text-2xl">
        Either way, let's take you back someplace familiar.
      </p>
      <Link
        to="/"
        className="px-5 py-3 mt-10 text-lg border border-custBlack hover:scale-110 transition-all active:bg-custBlack active:text-custWhite"
      >
        Back to Homepage
      </Link>
    </div>
  );
}

export default ErrorPage;
