import { extendType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";


export const Client = objectType({
    name: "Client",
    definition(t) {
        t.nonNull.int("clientId");
        t.nonNull.int("userId");
        t.field('user', {
            type: "User",
            resolve(parent, args, context) {
                return context.prisma.user
                    .findUnique({ where: { userId: parent.userId } })
            },
        })
    }
})

export const ClientQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("clients", {
            type: "Client",
            resolve(parent, args, context, info) {
                return context.prisma.client.findMany();
            }
        });
        t.nonNull.list.nonNull.field("client", {
            type: "Client",
            args: {
                userId: nonNull(intArg()),
            },
            resolve(parent, args, context, info) {
                return context.prisma.client.findMany({
                    where: {
                        userId: args.userId,
                    }
                });
            }
        })
    }
})

export const ClientMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field(
            "addClient", {
            type: "Client",
            args: {
                userId: nonNull(intArg())
            },

            resolve(parent, args, context) {
                const { userId } = args
                const newClient = context.prisma.client.create({
                    data: {
                        userId
                    }
                });

                return newClient
            }
        });
        t.nonNull.field("removeClient", {
            type: "Client",
            args: {
                clientId: nonNull(intArg()),
            },
            resolve(parten, args, context) {
                return context.prisma.client.delete({
                    where: {
                        clientId: args.clientId,
                    },
                });
            }
        });
    },
})