import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <FluentProvider theme={teamsLightTheme}>
      <RouterProvider router={router} />
      </FluentProvider>
    </Provider>
  </React.StrictMode>
);