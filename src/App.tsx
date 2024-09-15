import { Route, Routes } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import TicketsPage from "./pages/TicketsPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div className="container mx-auto px-4 min-h-screen  flex flex-col">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <footer className="mt-auto mb-5">
        <p className="text-center"> Project by SoloLineR </p>
      </footer>
    </div>
  );
}

export default App;
