import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany();
    return Response.json(testimonials);
  } catch (err) {
    console.error(err);
    return Response.json({ message: 'Failed to fetch testimonials' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
