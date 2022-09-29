# Orion's Ads
## _The ads manager for the next generation_

Orion's Ads is a fullstack web page application wich allows to review ads and contact with the publisher

Technologies used: 
- PostgreSQL
- GraphQL
- Nexus
- Prisma
- React
- Redux
- Material UI

## Features

- User Sign In and Sign Up
- Diferent options for diferent user type (CLient, Publisher and Admin)
- Suggest/Create Categories
- Create ads
- View Ads and Ads details
- Search Ads by title



This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Installation

Orion's Ads requires [Node.js](https://nodejs.org/) v10+ to run.
Add the PostgresSQL connection string to libs/prisma-db-connection/prisma/schema.prisma. Generate the prisma prisma schema (You have to be in the folder):
```sh
npx prisma migrate dev --name "init" 
```

Install the dependencies and devDependencies and start the server.

```sh
npm i
```

Run the Backend GraphQL server
```sh
nx serve api
```
Run the Frontend React Web-App

```sh
nx serve web-app
```
