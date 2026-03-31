import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route.js";
import { UserRoutes } from "../modules/user/user.route.js";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route.js";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route.js";

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
  {
    path: "/academic-semesters",
    route: AcademicSemesterRoutes,
  },
  {
    path: "/academic-faculty",
    route: AcademicFacultyRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
