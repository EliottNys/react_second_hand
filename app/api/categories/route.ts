import { prisma } from "@/db";
import { NextRequest } from "next/server";

export async function getCategories() {
  const res = await prisma.category.findMany();
  return res;
}

export async function GET(req: NextRequest) {
  const res = await getCategories();
  return Response.json(res);
}
