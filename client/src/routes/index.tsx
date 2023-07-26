import { Routes, Route } from "react-router-dom";

// Containers
import App from "./containers/App";

// Pages
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
