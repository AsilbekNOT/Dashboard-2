import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/mainPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
