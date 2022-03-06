import express from "express";
import config from "config";
import log from "./logger";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, host, () => {
  log.info("server started at http://%s:%s", host, port);
});
