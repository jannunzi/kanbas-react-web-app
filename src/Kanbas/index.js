import { Routes, Route } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";

function Kanbas() {
  return (
    <div className="d-flex flex-row">
      <KanbasNavigation />
      <Routes>
        <Route path="account/*" element={<Account />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default Kanbas;
