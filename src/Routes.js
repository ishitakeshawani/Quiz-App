import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
