import { PrismaClient } from ".prisma/client";
import { decodeAuthHeader, AuthTokenPayload } from "../../graphql-models/src/utils/auth";   
import { Request } from "express";  

export const prisma = new PrismaClient();

export interface Context {    
    prisma: PrismaClient;
    userId?: number;  
}

export const context = ({ req }: { req: Request }): Context => {
    const token =
        req && req.headers.authorization
            ? decodeAuthHeader(req.headers.authorization)
            : null;

    return {  
        prisma,
        userId: token?.userId, 
    };
};


// To run prisma migration: (You have to be in the folder)
// npx prisma migrate dev --name "init" 


// Mac mini url
// url      = "postgres://postgres:postgres@localhost:5432/orionDB"
