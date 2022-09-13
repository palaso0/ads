import { extendType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";


export const Publisher = objectType({
    name: "Publisher",
    definition(t) {
        t.nonNull.int("publisherId");
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

// export const UserMutation = extendType({
//     type: "Mutation",
//     definition(t) {
//         t.nonNull.field(
//             "post", {
//             type: "User",
//             args: {
//                 userName: nonNull(stringArg()),
//                 password: nonNull(stringArg()),
//                 email: nonNull(stringArg()),
//                 name: nonNull(stringArg()),
//                 lastName: nonNull(stringArg()),
//             },

//             resolve(parent, args, context) {
//                 const { userName, password, email, name, lastName  } = args
//                 const newUser = context.prisma.user.create({
//                     data: {
//                         userName,
//                         password,
//                         email,
//                         name,
//                         lastName
//                     }
//                 });

//                 return newUser
//             }
//         });
//         t.nonNull.field("remove", {
//             type: "User",
//             args: {
//                 userId: nonNull(intArg()),
//             },
//             resolve(parten, args, context) {
//                 return context.prisma.user.delete({
//                     where: {
//                         userId: args.userId,
//                     },
//                 });
//             }
//         });
//     },
// })