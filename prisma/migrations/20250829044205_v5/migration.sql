/*
  Warnings:

  - The values [EASY,MEDIUM,HARD] on the enum `Difficulty` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."Category" AS ENUM ('arrays', 'strings', 'trees', 'graphs', 'dynamic_programming', 'sorting', 'searching', 'math', 'other');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."Difficulty_new" AS ENUM ('easy', 'hard', 'medium');
ALTER TABLE "public"."Problem" ALTER COLUMN "difficulty" DROP DEFAULT;
ALTER TABLE "public"."Problem" ALTER COLUMN "difficulty" TYPE "public"."Difficulty_new" USING ("difficulty"::text::"public"."Difficulty_new");
ALTER TYPE "public"."Difficulty" RENAME TO "Difficulty_old";
ALTER TYPE "public"."Difficulty_new" RENAME TO "Difficulty";
DROP TYPE "public"."Difficulty_old";
ALTER TABLE "public"."Problem" ALTER COLUMN "difficulty" SET DEFAULT 'easy';
COMMIT;

-- AlterTable
ALTER TABLE "public"."Problem" ADD COLUMN     "category" "public"."Category" NOT NULL DEFAULT 'other',
ALTER COLUMN "difficulty" SET DEFAULT 'easy';
