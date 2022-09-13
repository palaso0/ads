/*
  Warnings:

  - You are about to drop the column `categoryCategoryId` on the `Ad` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Ad` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ad" DROP CONSTRAINT "Ad_categoryCategoryId_fkey";

-- DropIndex
DROP INDEX "Category_categoryId_key";

-- AlterTable
ALTER TABLE "Ad" DROP COLUMN "categoryCategoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ad" ADD CONSTRAINT "Ad_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;
