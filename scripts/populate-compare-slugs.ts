const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const compares = await prisma.compare.findMany();

  for (const compare of compares) {
    if (compare.main_title) {
      const slug = compare.main_title.toLowerCase().replace(/ /g, '-');
      await prisma.compare.update({
        where: { id: compare.id },
        data: { slug },
      });
    }
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
