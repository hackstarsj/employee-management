import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import AddEmployeeForm from "../dashboard/AddEmployeeForm";
import EmployeeDashboard from "../dashboard/EmployeeDashboard";
import EmployeeDetails from "../dashboard/EmployeeDetails";
import Dashboard from "../layout/Dashboard";

function RouteEndPoint() {
  return (
    <Router>
    <Routes>
        <Route exact path="/addemployee/" element={<Dashboard page={AddEmployeeForm}/>} />
        <Route exact path="/view/" element={<Dashboard page={EmployeeDetails}/>} />
        <Route exact path="/" element={<Dashboard page={EmployeeDashboard}/>}/>
    </Routes>
  </Router>
  );
}

export default RouteEndPoint;
