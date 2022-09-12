import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
//styles
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Create from "./pages/create/Create";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import Signup from "./pages/signup/Signup";
import OnlineUsers from "./components/OnlineUsers";
//pages and components
function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {!user && <Navigate to="/login" />}
                    {user && <Dashboard />}
                  </>
                }
              />
              <Route
                path="/create"
                element={
                  <>
                    {!user && <Navigate to="/login" />}
                    {user && <Create />}
                  </>
                }
              />
              <Route
                path="/projects/:id"
                element={
                  <>
                    {!user && <Navigate to="/login" />}
                    {user && <Project />}
                  </>
                }
              />
              <Route
                path="/login"
                element={
                  <>
                    {user && <Navigate to="/" />}
                    {!user && <Login />}
                  </>
                }
              />
              <Route
                path="/signup"
                element={
                  <>
                    {user && <Navigate to="/" />}
                    {!user && <Signup />}
                  </>
                }
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
