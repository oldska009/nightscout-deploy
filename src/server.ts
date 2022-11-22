require("dotenv").config();
import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import queryType from "./graphql/query";

const app: Express = express();
app.use(cors());

const schema = new GraphQLSchema({
  query: queryType,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/graphql", graphqlHTTP({ graphiql: true, schema }));
app.get(`/check`, (req: any, res: any) => {
  res.sendStatus(200);
});
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join("../client/dist")));
//   app.get(`*`, (req: any, res: any) => {
//     res.sendFile(path.resolve("../client/dist", "index.html"));
//   });
// }

const start = async (): Promise<void> => {
  const PORT: string | number = process.env.PORT || 5000;
  const url: string = process.env.ATLAS_URI;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };
  try {
    await mongoose.connect(url);
    app.listen(PORT, () => console.log(`App Up in ${PORT}`));
  } catch (err: any) {
    console.log(err.message);
    process.exit();
  }
};
start();
