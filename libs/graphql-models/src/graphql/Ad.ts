import { extendType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";
import { ArgsRecord, list } from "nexus/dist/core";
import { resolve } from "path";
import { text } from "stream/consumers";
import { NexusGenObjects } from "../nexus-models/nexus-typegen";


export const Ad = objectType({
    name: "Ad",
    definition(t) {
        t.nonNull.int("adId");
        t.nonNull.string("title");
        t.nonNull.string("detail");
        t.nonNull.list.nonNull.string("photos");
        t.nonNull.list.nonNull.string("keywords");
        t.nonNull.dateTime("creationDate");
        t.nonNull.int("categoryId");
        t.field("category", {
            type: "Category",
            resolve(parent, args, context) {
                return context.prisma.category
                    .findUnique({ where: { categoryId: parent.categoryId } })
            }
        });
        t.nonNull.int("adminId");
        t.field("adminCreator", {
            type: "Admin",
            resolve(parent, args, context) {
                return context.prisma.admin
                    .findUnique({ where: { adminId: parent.adminId } })
            }
        });
        t.nonNull.int("publisherId");
        t.field("publishedBy", {
            type: "Publisher",
            resolve(parent, args, context) {
                return context.prisma.publisher
                    .findUnique({ where: { publisherId: parent.publisherId } })
            }
        })
    }
})

export const AdQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("ads", {
            type: "Ad",
            resolve(parent, args, context, info) {
                return context.prisma.ad.findMany();
            }
        });
        t.nonNull.list.nonNull.field("ad", {
            type: "Ad",
            args: {
                adId: nonNull(intArg())
            },
            resolve(parent, args, context, info) {
                return context.prisma.ad.findMany({
                    where: {
                        adId: args.adId,
                    }
                })
            }
        });
        t.nonNull.list.field("search",{
            type: "Ad",
            args: {
                text: nonNull(stringArg())
            },
            resolve(parent,args,context,info){
                return context.prisma.ad.findMany({
                    where: { 
                        title: args.text,
                    }
                })
            }
        })
    }
})

export const AdMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field(
            "addAd", {
            type: "Ad",
            args: {
                title: nonNull(stringArg()),
                detail: nonNull(stringArg()),
                photos: nonNull(list(nonNull(stringArg()))),
                keywords: nonNull(list(nonNull(stringArg()))),
                categoryId: intArg(),
                adminId: nonNull(intArg()),
                publisherId: nonNull(intArg())
            },
            resolve(parent, args: any, context) {
                const { title, detail, photos, keywords, categoryId, adminId, publisherId } = args
                const newAd = context.prisma.ad.create({
                    data: {
                        title,
                        detail,
                        photos,
                        keywords,
                        categoryId,
                        adminId,
                        publisherId
                    }
                });
                return newAd
            }
        });

        t.nonNull.field("removeAd", {
            type: "Ad",
            args: {
                adId: nonNull(intArg()),
            },
            resolve(parten, args, context) {
                return context.prisma.ad.delete({
                    where: {
                        adId: args.adId,
                    },
                });
            }
        });
    },
})