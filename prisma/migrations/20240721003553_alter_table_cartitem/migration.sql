/*
  Warnings:

  - Added the required column `freight` to the `cart_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cart_items" ADD COLUMN     "freight" DOUBLE PRECISION NOT NULL;
