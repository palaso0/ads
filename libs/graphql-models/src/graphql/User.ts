import { extendType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";
import { ArgsRecord } from "nexus/dist/core";
import { resolve } from "path";
import { NexusGenObjects } from "../nexus-models/nexus-typegen";


export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("userName");
        t.nonNull.string("password")
        t.nonNull.string("email")
        t.nonNull.string("name")
        t.nonNull.string("lastName")
        t.nonNull.string("type")
    }
})

export const UserQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field(
            "users", {
            type: "User",
            resolve(parent, args, context, info) {
                return context.prisma.user.findMany();
            }
        });
        t.nonNull.list.nonNull.field("user", { 
            type: "User",
            args: {
                id: nonNull(intArg()),
            },
            resolve(parent,args,context,info){
                return context.prisma.user.findMany({
                    where: {
                        id: args.id,
                    }
                });
            }
        })
    }
})

export const UserMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field(
            "post", {
            type: "User",
            args: {
                userName: nonNull(stringArg()),
                password: nonNull(stringArg()),
                email: nonNull(stringArg()),
                name: nonNull(stringArg()),
                lastName: nonNull(stringArg()),
                type: nonNull(stringArg())
            },

            resolve(parent, args, context) {
                const { userName, password, email, name, lastName, type } = args
                const newUser = context.prisma.user.create({
                    data: {
                        userName,
                        password,
                        email,
                        name,
                        lastName,
                        type
                    }
                });

                return newUser
            }
        });
        t.nonNull.field("remove", {
            type: "User",
            args: {
                id: nonNull(intArg()),
            },
            resolve(parten, args, context) {
                return context.prisma.user.delete({
                    where: {
                        id: args.id,
                    },
                });
            }
        });
    },
})