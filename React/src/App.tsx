import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Auth />} />

          {/* protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>

          {/* catch all */}
          <Route path="*" element=<NotFound /> />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
