import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HomePage from "./HomePage";
import HawaiiApp from "./Projects/Hawaii/HawaiiApp";
import PhotoWebsiteApp from "./Projects/PhotoWebsite/PhotoWebsiteApp";
import TodoListApp from "./Projects/TodoList/TodoListApp";
// import SmartContract from "./Projects/SmartContract/SmartContract";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/hawaii" element={<HawaiiApp />} />
          <Route path="/projects/todolist" element={<TodoListApp />} />
          <Route path="/projects/photowebsite" element={<PhotoWebsiteApp />} />
          {/* <Route path="/projects/smartcontract" element={<SmartContract />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
