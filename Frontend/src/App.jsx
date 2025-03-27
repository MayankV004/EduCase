import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './utils/axiosConfig';
import Page1 from "./pages/Page1";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProtectedRoute from './components/ProtectRoute';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
    <Toaster/>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/account" 
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;