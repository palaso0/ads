-- CreateTable
CREATE TABLE "SuggestedCategories" (
    "suggestedCategoryId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "SuggestedCategories_pkey" PRIMARY KEY ("suggestedCategoryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "SuggestedCategories_title_key" ON "SuggestedCategories"("title");
