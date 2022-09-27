import { extendType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";


export const Category = objectType({
    name: "Category",
    definition(t) {
        t.nonNull.int("categoryId");
        t.nonNull.string("title");
    }
})

export const CategoryQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("categories", {
            type: "Category",
            resolve(parent, args, context, info) {
                return context.prisma.category.findMany();
            }
        });
        t.nonNull.list.nonNull.field("category", {
            type: "Category",
            args: {
                categoryId: nonNull(intArg()),
            },
            resolve(parent, args, context, info) {
                return context.prisma.category.findMany({
                    where: {
                        categoryId: args.categoryId,
                    }
                });
            }
        });
        t.field("SearchCategoryByTitle",{
            type: "Category",
            args: {
                categoryTitle: nonNull(stringArg()),
            },
            resolve(parent, args,context,info){
                return context.prisma.category.findUnique({
                    where: {
                        title: args.categoryTitle
                    }
                })
            }
        })
    }
})

export const CategoryMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field(
            "addCategory", {
            type: "Category",
            args: {
                title: nonNull(stringArg())
            },
            resolve(parent, args, context) {
                const { title  } = args
                const newCategory = context.prisma.category.create({
                    data: {
                        title
                    }
                });

                return newCategory
            }
        });
        t.nonNull.field("removeCategory", {
            type: "Category",
            args: {
                categoryId: nonNull(intArg()),
            },
            resolve(parten, args, context) {
                return context.prisma.category.delete({
                    where: {
                        categoryId: args.categoryId,
                    },
                });
            }
        });
    },
})