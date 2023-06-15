import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage"));
const EmployeeDetailsPage = lazy(() => import("./pages/EmployeeDetailsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
function App() {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/employee/:id" element={<EmployeeDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
