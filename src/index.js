import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import store, { persistor } from "./shared/store/store";
import CreateMenu from "./pages/loginPage/changeCreateMenu/createMenu/createMenu";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/login/create", element: <CreateMenu /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
