import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import NewPost from "./NewPost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post" element={<NewPost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;