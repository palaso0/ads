import { extendType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";
import { ArgsRecord } from "nexus/dist/core";
import { resolve } from "path";
import { NexusGenObjects } from "../nexus-models/nexus-typegen";


export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.int("userId");
        t.nonNull.string("userName");
        t.nonNull.string("password")
        t.nonNull.string("email")
        t.nonNull.string("name")
        t.nonNull.string("lastName")
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
                userId: nonNull(intArg()),
            },
            resolve(parent, args, context, info) {
                return context.prisma.user.findMany({
                    where: {
                        userId: args.userId,
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
            "addUser", {
            type: "User",
            args: {
                userName: nonNull(stringArg()),
                password: nonNull(stringArg()),
                email: nonNull(stringArg()),
                name: nonNull(stringArg()),
                lastName: nonNull(stringArg()),
            },

            resolve(parent, args, context) {
                const { userName, password, email, name, lastName } = args
                const newUser = context.prisma.user.create({
                    data: {
                        userName,
                        password,
                        email,
                        name,
                        lastName
                    }
                });

                return newUser
            }
        });
        t.nonNull.field("removeUser", {
            type: "User",
            args: {
                userId: nonNull(intArg()),
            },
            resolve(parten, args, context) {
                return context.prisma.user.delete({
                    where: {
                        userId: args.userId,
                    },
                });
            }
        });
    },
})