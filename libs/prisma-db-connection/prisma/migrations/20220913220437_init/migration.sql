/*
  Warnings:

  - A unique constraint covering the columns `[categoryId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Category_title_key";

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryId_key" ON "Category"("categoryId");
