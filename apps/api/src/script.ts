import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const ads = await prisma.ad.findMany()

    console.log(ads);
}


main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });