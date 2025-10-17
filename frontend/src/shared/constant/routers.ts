export const routes = Object.freeze({
  home: "/",
  create: "/create",
  update: (id: string) => `update/${id}`,
});
