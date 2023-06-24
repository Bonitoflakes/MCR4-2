import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./folderrenamed/page/Home";
import { CommentPage } from "./folderrenamed/Component/Single";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/comment" element={<CommentPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
