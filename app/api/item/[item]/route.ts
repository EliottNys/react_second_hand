import { NextRequest } from "next/server";
import { getItem } from "@/tools/tools";

export async function GET(
  req: NextRequest,
  { params }: { params: { item: string } },
) {
  const item = await getItem(parseInt(params.item));
  return Response.json(item);
}
