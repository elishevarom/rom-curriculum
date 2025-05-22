import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="page-section text-center">
        <h1 className="display-4 text-primary">Welcome!</h1>
        <p className="lead text-secondary">
          Explore engaging curriculums and discover new teaching resources.
        </p>
        <Link to="/curriculums" className="btn btn-success btn-lg mt-3">
          Browse Curriculums
        </Link>
      </div>
    </div>
  );
}