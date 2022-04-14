import "./App.css";
import Test from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./templates/Layout";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage";
import JobsPage from "./pages/JobsPage/JobsPage";
import JobDetailPage from "./pages/JobDetailPage/JobDetailPage";
import JobsByTypePage from "./pages/JobsByTypePage/JobsByTypePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import AdminLayout from "./templates/AdminLayout";
import GigsPage from "./pages/GigsPage/GigsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<Layout Component={UserDetailPage} />} />
          <Route path="/jobs" element={<Layout Component={JobsPage} />} />
          <Route
            path="/jobs/:id"
            element={<Layout Component={JobDetailPage} />}
          />
          <Route
            path="/jobs-by-type/:id"
            element={<Layout Component={JobsByTypePage} />}
          />
          <Route
            path="/admin"
            element={<AdminLayout Component={AdminPage} />}
          />
          <Route
            path="/admin/gigs"
            element={<AdminLayout Component={GigsPage} />}
          />

          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
