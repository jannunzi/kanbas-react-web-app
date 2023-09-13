import { Routes, Route, Navigate } from "react-router-dom";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";

function Account() {
  return (
    <>
      <AccountNavigation />
      <Routes>
        <Route path="/" element={<Navigate to={"profile"} />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default Account;
