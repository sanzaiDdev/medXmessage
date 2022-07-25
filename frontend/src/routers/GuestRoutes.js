import React from "react";

import { Route, Routes } from "react-router-dom";

import { HomeScreen } from "../screens/HomeScreen";
import { SignInScreen } from "../screens/SignInScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";

export const GuestRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="signin" element={<SignInScreen />} />
      <Route path="/*" element={<NotFoundScreen />} />
    </Routes>
  );
};
