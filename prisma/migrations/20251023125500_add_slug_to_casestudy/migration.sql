-- Add slug column to CaseStudy table
ALTER TABLE `CaseStudy` ADD COLUMN `slug` VARCHAR(191) NULL;

-- Add unique constraint to slug column
CREATE UNIQUE INDEX `CaseStudy_slug_key` ON `CaseStudy`(`slug`);
