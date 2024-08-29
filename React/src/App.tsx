import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { AuthProvider } from "./context/AuthProvider";
import FullCitizenForm from "./pages/FullCitizenForm";
import CitizenDetails from "./pages/CitizenDetails";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Auth />} />

          {/* protected Routes */}
          <Route element={<ProtectedRoutes redirectPath="/" />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="addcitizen" element={<FullCitizenForm />} />
              <Route path="citizens" element={<CitizenDetails />} />
            </Route>
          </Route>

          {/* catch all */}
          <Route path="*" element=<NotFound /> />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
