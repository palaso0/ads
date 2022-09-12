import { ApolloServer } from "apollo-server";
import {context} from "../../../libs/prisma-db-connection/src/context"
import { schema } from "./graphql/schema";

export const server = new ApolloServer({
  schema,
  context
})

const port = 3000

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});