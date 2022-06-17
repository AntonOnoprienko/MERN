import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import { LinksPage } from "./pages/LinksPage";

export const useRoutes = (isAuthificated) => {
  if (isAuthificated) {
    return (
      <Routes>
        <Route path="/links" element={<LinksPage />} exact />
        <Route path="/create" element={<CreatePage />} exact />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<Navigate to="/create" replace />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
