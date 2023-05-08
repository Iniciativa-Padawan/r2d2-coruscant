/*
  Warnings:

  - Changed the type of `sequential` on the `Movie` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "sequential",
ADD COLUMN     "sequential" INTEGER NOT NULL;
