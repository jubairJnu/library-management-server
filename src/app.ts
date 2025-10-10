import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from new file system and tsconfig change !");
});
app.get("/new", (req: Request, res: Response) => {
  res.send("Hello World from new file system and new live !");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
