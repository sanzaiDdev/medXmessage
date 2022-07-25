import { Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";

import { CMSRoutes } from "./routers/CMSRoutes";
// import { GuestRoutes } from "./routers/GuestRoutes";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          {/* <Route path="/*" element={<GuestRoutes />} /> */}
          <Route path="/" element={<Navigate to="/cms/cases" replace />} />
          <Route path="/cms/*" element={<CMSRoutes />} />
        </Routes>{" "}
      </Provider>
    </div>
  );
}

export default App;
