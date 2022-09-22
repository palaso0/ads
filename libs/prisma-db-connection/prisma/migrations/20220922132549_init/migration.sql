-- CreateTable
CREATE TABLE "SuggestedCategory" (
    "suggestedCategoryId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "SuggestedCategory_pkey" PRIMARY KEY ("suggestedCategoryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "SuggestedCategory_title_key" ON "SuggestedCategory"("title");
