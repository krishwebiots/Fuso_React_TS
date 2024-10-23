import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./ReduxToolkit/Store";
import Routers from "./Routers";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={Routers} />
    </Provider>
  );
};

export default App;
