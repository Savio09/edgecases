/*
  Warnings:

  - The primary key for the `EdgeCase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `EdgeCase` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `EdgeCase` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `EdgeCase` table. All the data in the column will be lost.
  - The primary key for the `Problem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `updatedAt` on the `Problem` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Problem` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `EdgeCase` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `EdgeCase` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `authorId` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."EdgeCase" DROP CONSTRAINT "EdgeCase_problemId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EdgeCase" DROP CONSTRAINT "EdgeCase_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Problem" DROP CONSTRAINT "Problem_userId_fkey";

-- AlterTable
ALTER TABLE "public"."EdgeCase" DROP CONSTRAINT "EdgeCase_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "authorId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "problemId" SET DATA TYPE TEXT,
ADD CONSTRAINT "EdgeCase_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "EdgeCase_id_seq";

-- AlterTable
ALTER TABLE "public"."Problem" DROP CONSTRAINT "Problem_pkey",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "authorId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Problem_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Problem_id_seq";

-- AlterTable
ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "public"."Problem" ADD CONSTRAINT "Problem_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EdgeCase" ADD CONSTRAINT "EdgeCase_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EdgeCase" ADD CONSTRAINT "EdgeCase_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "public"."Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
