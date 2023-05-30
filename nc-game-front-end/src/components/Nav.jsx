import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home | </Link>
      <Link to="/reviews">Reviews List | </Link>
      <Link to="/users">User Sign In  | </Link>
      <Link to="/users/user">View your account | </Link>

    </nav>
  );
}

export default Nav;