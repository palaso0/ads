import { extendType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";


export const Publisher = objectType({
    name: "Publisher",
    definition(t) {
        t.nonNull.int("publisherId");
        t.nonNull.string("cellphone");
        t.nonNull.string("photo");
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

export const PublisherQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("publishers", {
            type: "Publisher",
            resolve(parent, args, context, info) {
                return context.prisma.publisher.findMany();
            }
        });
        t.nonNull.list.nonNull.field("publisher", {
            type: "Publisher",
            args: {
                userId: nonNull(intArg()),
            },
            resolve(parent, args, context, info) {
                return context.prisma.publisher.findMany({
                    where: {
                        userId: args.userId,
                    }
                });
            }
        })
    }
})

export const PublisherMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field(
            "addPublisher", {
            type: "Publisher",
            args: {
                userId: nonNull(intArg()),
                cellphone: nonNull(stringArg()),
                photo: nonNull(stringArg())
            },

            resolve(parent, args, context) {
                const {
                    userId,
                    cellphone,
                    photo
                } = args
                const newPublisher = context.prisma.publisher.create({
                    data: {
                        userId,
                        cellphone,
                        photo
                    }
                });

                return newPublisher
            }
        });
        t.nonNull.field("removePublisher", {
            type: "Publisher",
            args: {
                publisherId: nonNull(intArg()),
            },
            resolve(parten, args, context) {
                return context.prisma.publisher.delete({
                    where: {
                        publisherId: args.publisherId,
                    },
                });
            }
        });
        t.nonNull.field("updatePublisher", {
            type: "Publisher",
            args: {
                publisherId: nonNull(intArg()),
                cellphone: stringArg(),
                photo: stringArg(),
            },
            resolve(parent, args, context) {
                return context.prisma.publisher.update({
                    where: {
                        publisherId: args.publisherId,
                    },
                    data: {
                        cellphone: (args.cellphone == null || args.cellphone == "") ? undefined : args.cellphone,
                        photo: (args.photo == null || args.photo == "") ? undefined : args.photo,
                    }
                })
            }
        })
    },
})
