// src/routes/index.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/login";
import Page404 from "../pages/Page404";
// import Dashboard from "../pages/Dashboard"; // exemplo de rota protegida

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Exemplo de rota fechada / privada:
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute requireAuth>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      */}

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
