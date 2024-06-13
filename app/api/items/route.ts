import { NextRequest } from "next/server";
import { getItems } from "@/tools/tools";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const page = params.get("page");
  const intPage = page ? parseInt(page) : 1;
  const res = await getItems(intPage);
  return Response.json(res);
}
