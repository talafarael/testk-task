import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../shared/store";
import { Header } from "../../../widgets/ui/header";
import "./style.css";
export const Layout = () => {
  return (
    <div className="body-container">
      <Provider store={store}>
        <Header />
        <div className="children-container">
          <Outlet />
        </div>
      </Provider>
    </div>
  );
};
