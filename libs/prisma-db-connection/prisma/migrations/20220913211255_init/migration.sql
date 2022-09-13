/*
  Warnings:

  - You are about to drop the `_AdToCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryCategoryId` to the `Ad` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AdToCategory" DROP CONSTRAINT "_AdToCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_AdToCategory" DROP CONSTRAINT "_AdToCategory_B_fkey";

-- AlterTable
ALTER TABLE "Ad" ADD COLUMN     "categoryCategoryId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_AdToCategory";

-- AddForeignKey
ALTER TABLE "Ad" ADD CONSTRAINT "Ad_categoryCategoryId_fkey" FOREIGN KEY ("categoryCategoryId") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;
