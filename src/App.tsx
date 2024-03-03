import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Portfolio } from "./pages/Portfolio";

const App = () => {
  return (
    <Provider store={store}>
      <Portfolio />
    </Provider>
  );
};

export default App;
