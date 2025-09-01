-- CreateEnum
CREATE TYPE "public"."Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- AlterTable
ALTER TABLE "public"."Problem" ADD COLUMN     "difficulty" "public"."Difficulty" NOT NULL DEFAULT 'EASY';
