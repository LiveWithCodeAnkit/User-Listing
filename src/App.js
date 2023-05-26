import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./components/HeroPage/HeroPage";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/UsersDetails/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/getuser" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
