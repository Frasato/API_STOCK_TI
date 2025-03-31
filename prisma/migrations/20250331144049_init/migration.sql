-- CreateTable
CREATE TABLE "stockIn" (
    "id" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mark" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "entry" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stockIn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stockOut" (
    "id" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mark" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "out" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stockOut_pkey" PRIMARY KEY ("id")
);
