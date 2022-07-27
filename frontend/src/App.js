import { Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { store } from "./store";

import { CMSRoutes } from "./routers/CMSRoutes";
import { NotFoundScreen } from "./screens/NotFoundScreen";
// import { GuestRoutes } from "./routers/GuestRoutes";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />
      <Provider store={store}>
        <Routes>
          {/* <Route path="/*" element={<GuestRoutes />} /> */}
          <Route path="/" element={<Navigate to="/cms/messages " replace />} />
          <Route path="/cms/*" element={<CMSRoutes />} />
          <Route path="/*" element={<NotFoundScreen />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
