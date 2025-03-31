/*
  Warnings:

  - Added the required column `quantity` to the `stockOut` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stockOut" ADD COLUMN     "quantity" INTEGER NOT NULL;
