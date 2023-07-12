import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-red-lighter text-brand-dark">
      <h1 className="text-5xl font-rajdhani mb-4">404 - Page Not Found</h1>
      <p className="text-xl font-barlow">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
