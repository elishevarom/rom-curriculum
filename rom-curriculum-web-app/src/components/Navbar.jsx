import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">My Curriculum Site</Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/curriculums">Curriculums</Link></li>
            {/* <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;