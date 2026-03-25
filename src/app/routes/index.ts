import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route.js";
import { UserRoutes } from "../modules/user/user.route.js";
import app from "../../app.js";

const router = Router();

const routes = [
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
