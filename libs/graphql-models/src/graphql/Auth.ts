import { objectType, extendType, nonNull, stringArg } from "nexus";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { APP_SECRET } from "../utils/auth";


export const AuthPayload = objectType({
    name: "AuthPayload",
    definition(t) {
        t.nonNull.string("token");
        t.nonNull.field("user", {
            type: "User",
        });
    },
});

export const AuthMutation = extendType({
    type: "Mutation",
    definition(t) {

        t.nonNull.field("login", {
            type: "AuthPayload",
            args: {
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            async resolve(parent, args, context) {
                const user = await context.prisma.user.findUnique({
                    where: { email: args.email },
                });
                if (!user) {
                    throw new Error("No such user found");
                }

                const valid = await bcrypt.compare(
                    args.password,
                    user.password,
                );
                
                if (!valid) {
                    throw new Error("Invalid password");
                }

                const token = jwt.sign({ userId: user.id }, APP_SECRET);

                return {
                    token,
                    user,
                };
            },
        });

        t.nonNull.field("signup", {
            type: "AuthPayload",
            args: {
                userName: nonNull(stringArg()),
                password: nonNull(stringArg()),
                email: nonNull(stringArg()),
                name: nonNull(stringArg()),
                lastName: nonNull(stringArg()),
                type: nonNull(stringArg())
            },
            async resolve(parent, args:any, context) {
                const { userName, email, name, lastName, type } = args;

                const password = await bcrypt.hash(args.password, 10);

                const user = await context.prisma.user.create({
                    data: { userName, email, name, lastName, type, password },
                });

                const token = jwt.sign({ userId: user.id }, APP_SECRET);

                return {
                    token,
                    user,
                };
            },
        });
    },
});
