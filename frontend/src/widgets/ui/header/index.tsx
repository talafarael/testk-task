import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/ui/button";
import "./style.css";
import { routes } from "../../../shared/constant/routers";

export const Header = () => {
  const navigate = useNavigate();
  const handlerNav = (path: string) => {
    navigate(path);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title" onClick={() => handlerNav(routes.home)}>
          Task Manager
        </h1>

        <Button
          text="Create Task"
          onClick={() => handlerNav(routes.create)}
          className="create-button"
        />
      </div>
    </header>
  );
};
