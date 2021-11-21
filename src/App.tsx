import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound"
function App() {

  const [authorized, setAuthorization] = useState(false)

  const [currentUser, setCurrentUser]= useState("")

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login setAuthorization={setAuthorization} setCurrentUser={setCurrentUser} />} />
        <Route path="/login" element={<Login setAuthorization={setAuthorization} setCurrentUser={setCurrentUser} />} />
        <Route path="/people-interactive" element={<Login setAuthorization={setAuthorization} setCurrentUser={setCurrentUser} />} />
        <Route path="/people-interactive/login" element={<Login setAuthorization={setAuthorization} setCurrentUser={setCurrentUser} />} />
        <Route path="/home" element={authorized ? (
          <Home setAuthorization={setAuthorization} currentUser={currentUser} />
        ) : (
          <Navigate to="/people-interactive/login" />
        )} />
        <Route path='*' element={<NotFound />} />
      </Routes>


    </Router>
  );
}

export default App;
