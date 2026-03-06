import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center gap-2">
      <div className="flex items-center bg-green-800 h-16 w-full">
        <ul className="flex gap-10 items-center px-8">
          <li>
            <Link to="/" className="hover:text-green-100 transition text-white">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cardio-warmups"
              className="hover:text-green-100 transition text-white"
            >
              Cardio Warmups
            </Link>
          </li>
          <li>
            <Link
              to="/stretching-warmups"
              className="hover:text-green-100 transition text-white"
            >
              Stretching Warmups
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
