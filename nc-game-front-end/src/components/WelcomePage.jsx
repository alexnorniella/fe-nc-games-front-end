import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <main>
      <header>
        <h1>Welcome To NC Games!</h1>
      </header>
      <section>
        <h2>Use the links below to navigate the NC Games </h2>
        <div>
          <Link to="/reviews">View all reviews</Link>
          <Link to="/reviews?category=BLAHH">View reviews by category</Link>
          <Link to="/users">Sign as user</Link>
        </div>
      </section>
    </main>
  );
}

export default WelcomePage;