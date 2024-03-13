import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function POST(req: Request) {
  const data = await req.json();

  const newItem = await prisma.simpleItem.create({ data: data });

  console.log("Created Item:");
  console.log(newItem);

  return NextResponse.json({ message: "Created Item" }, { status: 200 });
}
