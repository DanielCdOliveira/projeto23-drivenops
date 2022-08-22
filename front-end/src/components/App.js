import { BrowserRouter, Routes, Route } from "react-router-dom";

import Random from "./Random";
import List from "./List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/random" element={<Random />}></Route>
        <Route path="/students" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
