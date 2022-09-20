/*
  Warnings:

  - Added the required column `publisherId` to the `Ad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ad" ADD COLUMN     "publisherId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ad" ADD CONSTRAINT "Ad_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("publisherId") ON DELETE RESTRICT ON UPDATE CASCADE;
