-- CreateTable
CREATE TABLE "_AdToCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AdToCategory_AB_unique" ON "_AdToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_AdToCategory_B_index" ON "_AdToCategory"("B");

-- AddForeignKey
ALTER TABLE "_AdToCategory" ADD CONSTRAINT "_AdToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Ad"("adId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdToCategory" ADD CONSTRAINT "_AdToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("categoryId") ON DELETE CASCADE ON UPDATE CASCADE;
