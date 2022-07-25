import React from "react";

import { Route, Routes } from "react-router-dom";

import { CMSLayout } from "../layouts/CMSLayout";
import { DashboardScreen } from "../screens/cms/DashboardScreen";
import { MessageScreen } from "../screens/cms/message/MessageScreen";
// import { SettingsScreen } from "../screens/cms/SettingsScreen";
import { MessageDetailScreen } from "../screens/cms/message/MessageDetailScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";

export const CMSRoutes = () => {
  return (
    <Routes>
      <Route element={<CMSLayout />}>
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="messages" element={<MessageScreen />} />
        <Route path="messages/:id" element={<MessageDetailScreen />} />
        {/* <Route path="settings" element={<SettingsScreen />} /> */}
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
};
