import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import { reducers } from "./reducers";
import { Provider } from "react-redux";

//Create Store
const store = createStore(reducers);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
