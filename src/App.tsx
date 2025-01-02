import { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthComponent from "./pages/login/AuthComponent";
import "react-toastify/dist/ReactToastify.css";
import { getUserSession } from "./util/utility";
import Layout from "./pages/layout/Layout";

function App() {
  const [userSession, setUserSession] = useState(getUserSession());

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!userSession ? (
            <Route
              path="*"
              element={<AuthComponent setUserSession={setUserSession} />}
            ></Route>
          ) : (
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
