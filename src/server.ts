const { express, NextFunction, Request, Response } = require("express");
require("express-async-errors");
import { routes } from "./routes";
import cors from "cors";
import { request } from "http";

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

//MidleWare
app.use(
  (
    err: Error,
    request: typeof Request,
    response: typeof Response,
    next: typeof NextFunction
  ) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(process.env.PORT || 3000, () => console.log("Server is runing 🚀"));
