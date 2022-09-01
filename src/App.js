import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

function App() {
  const users = [
    {
      id: 1,
      name: "Vanshu",
    },
    {
      id: 2,
      name: "Pawan",
    },
    {
      id: 3,
      name: "Kartik",
    },
    {
      id: 4,
      name: "Hamza",
    },
  ];
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/users" element={<Users users={users} />}></Route>
          {/* Dynamic Route */}
          <Route path="/users/:userId" element={<UserDetails users={users}/>}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
