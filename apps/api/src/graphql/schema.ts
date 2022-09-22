import { makeSchema } from "nexus";
import { join } from "path";
import * as types from '../../../../libs/graphql-models/src/graphql'

export const schema = makeSchema({
    types,
    outputs: {
      schema: join(process.cwd(), "libs/graphql-models/src/nexus-models/schema.graphql"), 
      typegen: join(process.cwd(), "libs/graphql-models/src/nexus-models/nexus-typegen.ts"),  
    },
    contextType: {  
      module: join(process.cwd(), "libs/prisma-db-connection/src/context.ts"),  
      export: "Context", 
  },
  })

  //Generate Schema: 
  // yarn ts-node --project ./tsconfig.base.json --compiler-options '{"module":"CommonJS"}' --transpile-only apps/api/src/graphql/schema

