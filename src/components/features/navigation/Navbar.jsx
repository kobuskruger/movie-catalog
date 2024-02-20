import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white p-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/movies/search">Search</Link>
        </li>
        <li>
          <Link to="/movies/favourites">Favourites</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
