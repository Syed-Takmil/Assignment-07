import React from 'react';

const ErrorPage = () => {
    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="text-center p-10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 max-w-md w-full">
        <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-red-400 to-pink-500 mb-4">
          404
        </div>
        <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>
        <p className="text-slate-300 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/"
            className="px-5 py-2 rounded-xl bg-linear-to-r from-green-400 to-emerald-500 text-black font-medium hover:scale-105 transition"
          >
            Go Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}



export default ErrorPage;