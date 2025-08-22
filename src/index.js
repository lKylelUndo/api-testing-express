import serverless from "serverless-http";
import app from "./server.js";
import db from "./config/Database.js";

export const handler = serverless(async (req, res) => {
  await db.startdb();
  return app(req, res);
});
