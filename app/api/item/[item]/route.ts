import { prisma } from "@/db";
import { NextRequest } from "next/server";

export async function getItem(id: number) {
  const res = await prisma.simpleItem.findUnique({
    where: { id },
  });
  return res;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { item: string } },
) {
  const item = await getItem(parseInt(params.item));
  return Response.json(item);
}
