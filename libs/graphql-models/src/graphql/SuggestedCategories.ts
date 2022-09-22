import { extendType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";


export const SuggestedCategory = objectType({
    name: "SuggestedCategory",
    definition(t) {
        t.nonNull.int("suggestedCategoryId");
        t.nonNull.string("title");
    }
})

export const SuggestedCategoryQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("suggestedCategories", {
            type: "SuggestedCategory",
            resolve(parent, args, context, info) {
                return context.prisma.suggestedCategory.findMany();
            }
        });
        t.nonNull.list.nonNull.field("suggestedCategory", {
            type: "SuggestedCategory",
            args: {
                suggestedCategoryId: nonNull(intArg()),
            },
            resolve(parent, args, context, info) {
                return context.prisma.suggestedCategory.findMany({
                    where: {
                        suggestedCategoryId: args.suggestedCategoryId,
                    }
                });
            }
        })
    }
})

export const SuggestedCategoryMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field(
            "addSuggestedCategory", {
            type: "SuggestedCategory",
            args: {
                title: nonNull(stringArg())
            },
            resolve(parent, args, context) {
                const { title  } = args
                const newSuggestedCategory = context.prisma.suggestedCategory.create({
                    data: {
                        title
                    }
                });

                return newSuggestedCategory
            }
        });
        t.nonNull.field("removeSuggestedCategory", {
            type: "SuggestedCategory",
            args: {
                suggestedCategoryId: nonNull(intArg()),
            },
            resolve(parten, args, context) {
                return context.prisma.suggestedCategory.delete({
                    where: {
                        suggestedCategoryId: args.suggestedCategoryId,
                    },
                });
            }
        });
    },
})