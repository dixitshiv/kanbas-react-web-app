import Signin from "../users/signin";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Modules from "./Courses/Modules";
import UserTable from "../users/table";
function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/account/:id" element={<account />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
