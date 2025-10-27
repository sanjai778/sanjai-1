import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

async function main() {
  const tags = await prisma.tag.findMany({
    where: {
      slug: null,
    },
  });

  for (const tag of tags) {
    let newSlug = slugify(tag.name);
    let count = 1;

    let existingTag = await prisma.tag.findUnique({ where: { slug: newSlug } });
    while (existingTag) {
      newSlug = `${slugify(tag.name)}-${count}`;
      existingTag = await prisma.tag.findUnique({ where: { slug: newSlug } });
      count++;
    }

    await prisma.tag.update({
      where: { id: tag.id },
      data: { slug: newSlug },
    });
    console.log(`Updated tag "${tag.name}" with slug "${newSlug}"`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
