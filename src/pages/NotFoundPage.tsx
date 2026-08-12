import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Not Found | AD Solution</title>
        <meta
          name="description"
          content="The page you are looking for could not be found."
        />
      </Helmet>

      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-xl">
          <p className="text-7xl font-bold text-navy-900">
            404
          </p>

          <h1 className="mt-4 font-display text-3xl font-bold text-navy-900">
            Page Not Found
          </h1>

          <p className="mt-4 text-navy-500">
            Sorry, the page you're looking for doesn't exist or may have
            been moved.
          </p>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn-primary mt-8"
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
}