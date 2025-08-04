// src/App.js
import React from "react";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from './store';
import history from './services/history';
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <HistoryRouter history={history}>
          <Header />
          <AppRoutes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </HistoryRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
