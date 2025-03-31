/*
  Warnings:

  - Added the required column `quantity` to the `stockIn` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stockIn" ADD COLUMN     "quantity" INTEGER NOT NULL;
