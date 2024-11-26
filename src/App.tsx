import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./ReduxToolkit/Store";
import Routers from "./Routers";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={Routers} />
      <ToastContainer />
    </Provider>
  );
};

export default App;
