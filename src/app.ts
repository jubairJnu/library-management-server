import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { globalErrorHandler } from "./app/middleware/globalErrorHander";
import { notFound } from "./app/middleware/notFound";

import router from "./app/routes";

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from new file system and tsconfig change !");
});
app.get("/new", (req: Request, res: Response) => {
  res.send("Hello World from new file system and new live !");
});

// ? route use

app.use("/", router);

// global error handler

app.use(globalErrorHandler);
app.use(notFound);

export default app;
