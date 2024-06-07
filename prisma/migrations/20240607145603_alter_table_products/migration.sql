/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "imageUrl";
ALTER TABLE "products" ADD COLUMN "slug" TEXT;
ALTER TABLE "products" ALTER COLUMN "category" SET NOT NULL;
