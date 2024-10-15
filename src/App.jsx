// eslint-disable-next-line no-unused-vars
import React from "react";
import { Provider } from "react-redux";
import Chat from "./components/Chat";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Chat />
    </Provider>
  );
}

export default App;
