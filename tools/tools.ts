import { prisma } from "@/db";

export async function getCategories() {
  const res = await prisma.category.findMany();
  return res;
}
