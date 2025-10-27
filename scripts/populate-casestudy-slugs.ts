import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const caseStudies = await prisma.caseStudy.findMany();

  for (const caseStudy of caseStudies) {
    if (caseStudy.Title) {
      const slug = caseStudy.Title.toLowerCase().replace(/ /g, '-');
      await prisma.caseStudy.update({
        where: { id: caseStudy.id },
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
