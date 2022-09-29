import { ApolloServer } from "apollo-server";
import {context} from "../../../libs/prisma-db-connection/src/context"
import { schema } from "./graphql/schema";
import { WEB_APP_PORT } from "./constants";

export const server = new ApolloServer({
  schema,
  context
})

const port = WEB_APP_PORT

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});