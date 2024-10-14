import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  index("./Home.tsx"),
  route("questions", "./Questions.tsx"),
  route("/questions/:questionGenre/:questionName", "./Solve.tsx"),
];
