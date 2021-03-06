import express from "express";

//load middlewares
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

//load html template
import Template from "./../template";

const app = express();

//using middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

//basic route
app.get("/", (req, res) => {
  res.status(200).send(Template());
});

// configure express

export default app;
