import { extendType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";


export const Admin = objectType({
    name: "Admin",
    definition(t) {
        t.nonNull.int("adminId");
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

export const AdminQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("admins", {
            type: "Admin",
            resolve(parent, args, context, info) {
                return context.prisma.admin.findMany();
            }
        });
        t.nonNull.list.nonNull.field("admin", {
            type: "Admin",
            args: {
                userId: nonNull(intArg()),
            },
            resolve(parent, args, context, info) {
                return context.prisma.admin.findMany({
                    where: {
                        userId: args.userId,
                    }
                });
            }
        })
    }
})

export const AdminMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field(
            "addAdmin", {
            type: "Admin",
            args: {
                userId: nonNull(intArg())
            },

            resolve(parent, args, context) {
                const { userId } = args
                const newAdmin = context.prisma.admin.create({
                    data: {
                        userId
                    }
                });

                return newAdmin
            }
        });
        t.nonNull.field("removeAdmin", {
            type: "Admin",
            args: {
                adminId: nonNull(intArg()),
            },
            resolve(parten, args, context) {
                return context.prisma.admin.delete({
                    where: {
                        adminId: args.adminId,
                    },
                });
            }
        });
    },
})