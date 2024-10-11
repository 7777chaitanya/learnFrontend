import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  index("./home.tsx"),
  route("questions", "./questions.tsx"),
];
