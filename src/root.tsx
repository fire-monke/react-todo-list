import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Todo from "./pages/Todo.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/*" element={<Todo />}/>
    </Routes>
  </BrowserRouter>
);
