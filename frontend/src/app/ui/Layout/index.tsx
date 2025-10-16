import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../shared/store";

export const Layout = () => {
  return (
    <div>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  );
};
