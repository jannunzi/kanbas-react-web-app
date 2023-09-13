import { HashRouter, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/kanbas"} />} />
          <Route path="/kanbas/*" element={<Kanbas />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
