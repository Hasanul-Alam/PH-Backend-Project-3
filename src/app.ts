import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route.js";
import { UserRoutes } from "./app/modules/user/user.route.js";
import globalErrorHandler from "./app/middlewares/globalErrorHandler.js";
import notFound from "./app/middlewares/notFound.js";
import router from "./app/routes/index.js";
const app: Application = express();

// parsers
app.use(cors());
app.use(express.json());

// Application routes
app.use("/api/v1", router);

app.use(globalErrorHandler);

// Not found
app.use(notFound);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
