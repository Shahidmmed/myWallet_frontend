import { useState } from "react";
import "./App.css";
import Hi from "./pages/Hi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthComponent from "./pages/login/AuthComponent";
import "react-toastify/dist/ReactToastify.css";
import { getUserSession } from "./util/utility";

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
            <Route path="/" element={<Hi />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
