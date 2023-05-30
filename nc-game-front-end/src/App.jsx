import "./App.css";
import Nav from "./components/Nav";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllReviews from "./components/AllReviews";
import SingleReview from "./components/SingleReview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
