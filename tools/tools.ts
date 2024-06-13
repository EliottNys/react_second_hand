import { prisma } from "@/db";

export async function getCategories() {
  const res = await prisma.category.findMany();
  return res;
}

export async function getItem(id: number) {
  const res = await prisma.simpleItem.findUnique({
    where: { id },
    include: { category: true },
  });
  return res;
}

export async function getItems(page: number) {
  const res = await prisma.simpleItem.findMany({
    take: 12,
    skip: (page - 1) * 12,
  });
  return res;
}
