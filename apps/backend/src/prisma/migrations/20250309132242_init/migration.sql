/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WastePosts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_wastePostId_fkey";

-- DropForeignKey
ALTER TABLE "WastePosts" DROP CONSTRAINT "WastePosts_authorId_fkey";

-- AlterTable
ALTER TABLE "OTP" ALTER COLUMN "expiresAt" SET DEFAULT CURRENT_TIMESTAMP + interval '10 minutes';

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "WastePosts";
