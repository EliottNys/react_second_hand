import { prisma } from "@/db";
import { NextRequest } from "next/server";

export async function getItems(page: number) {
  const res = await prisma.simpleItem.findMany({
    take: 12,
    skip: (page - 1) * 12,
  });
  return res;
}

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const page = params.get("page");
  const intPage = page ? parseInt(page) : 1;
  const res = await getItems(intPage);
  return Response.json(res);
}
