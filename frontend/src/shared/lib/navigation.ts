import { router } from "../../app/router/router.config";

export const navigate = (path: string) => {
  router.navigate(path);
};
