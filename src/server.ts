const { NextFunction, Request, Response } = require("express");
const express = require("express");
require("express-async-errors");

const { cors } = require("cors");
const { routes } = require("./routes");

const app = express();
/* app.use(cors()); */

app.use(express.json());

/* app.use(routes); */
app.use(routes);

//MidleWare
/* app.use(
app.use(
  (
    err: Error,
    request: typeof Request,
    app.use(express.json());
      message: "Internal server error",
    });
  }
); */

app.listen(process.env.PORT || 3000, () => console.log("Server is runing 🚀"));
