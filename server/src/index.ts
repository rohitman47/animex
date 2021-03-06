import { graphqlHTTP } from "express-graphql";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import schema from "./graphql/schema.js";
import proxyHandler from "./controllers/proxy.controller.js";
import codegen from "./codegen.js";

config({ path: "../config/.env" });
const PORT = Number(process.env.PORT || 5500);
const HOST = process.env.HOST || "127.0.0.1";
const app = express();

app.use(
  // helmet({ contentSecurityPolicy: process.env.NODE_ENV === "development" ? false : undefined }),
  cors(),
  express.text(),
  express.json(),
  express.static("../../client/dist/")
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development" ? { headerEditorEnabled: true } : false,
  })
);

app.get("/proxy", proxyHandler);

app.listen(PORT, HOST, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(
      `✨ Server is running on \u001b[35;1mhttp://${HOST}:${PORT}\u001b[0m in \u001b[33;1m${process.env.NODE_ENV}\u001b[0m environment ✨`
    );
  }
  if (process.env.NODE_ENV === "production") {
    console.log(
      `✨ Server is running on \u001b[35;1mhttp://${HOST}:${PORT}\u001b[0m in \u001b[36;1m${process.env.NODE_ENV}\u001b[0m environment ✨`
    );
  }
});
