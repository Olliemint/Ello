import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; 
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { config } from "dotenv";

config(); 

const startServer = async () => {
  const app = express();

  
  app.use(
    cors({
      origin: ["http://localhost:5173", "https://ello-ten.vercel.app"],
      credentials: true,
    })
  );

  
  app.use(bodyParser.json());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
  });
};

startServer().catch((err) => {
  console.error("Server failed to start", err);
});
