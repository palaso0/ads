/*
  Warnings:

  - You are about to drop the column `adminId` on the `Ad` table. All the data in the column will be lost.
  - You are about to drop the column `clientClientId` on the `Ad` table. All the data in the column will be lost.
  - You are about to drop the column `publiserId` on the `Ad` table. All the data in the column will be lost.
  - You are about to drop the `_AdToCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ad" DROP CONSTRAINT "Ad_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Ad" DROP CONSTRAINT "Ad_clientClientId_fkey";

-- DropForeignKey
ALTER TABLE "Ad" DROP CONSTRAINT "Ad_publiserId_fkey";

-- DropForeignKey
ALTER TABLE "_AdToCategory" DROP CONSTRAINT "_AdToCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_AdToCategory" DROP CONSTRAINT "_AdToCategory_B_fkey";

-- DropIndex
DROP INDEX "Ad_adminId_key";

-- AlterTable
ALTER TABLE "Ad" DROP COLUMN "adminId",
DROP COLUMN "clientClientId",
DROP COLUMN "publiserId";

-- DropTable
DROP TABLE "_AdToCategory";
