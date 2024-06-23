/*
  Warnings:

  - Added the required column `sub_total` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_freight` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "sub_total" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_freight" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;
