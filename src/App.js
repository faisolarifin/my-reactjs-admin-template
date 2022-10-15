import React, { useState } from "react";
import User from "./Component/User/user";
import Login from "./Component/Auth/login";
import Setting from "./Component/Setting/setting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useToken from "./Component/Auth/usetoken";

function App() {
  

  const {token, setToken} = useToken();
  
  if (!token) {
    return (
      <Login setToken={setToken} />
    )
  }

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/user" element={<User />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
