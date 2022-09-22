export * from "./Ad"
export * from "./Admin"
export * from "./Auth"
export * from "./Category"
export * from "./Client"
export * from "./Publisher"
export * from "./User"
export * from "./SuggestedCategories"
export * from "./scalars/Date";


//Generate Schema: 
// yarn ts-node --project ./tsconfig.base.json --compiler-options '{"module":"CommonJS"}' --transpile-only apps/api/src/graphql/schema
