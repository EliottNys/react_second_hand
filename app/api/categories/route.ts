import { prisma } from "@/db";
import { NextRequest } from "next/server";
import { getCategories } from "@/tools/tools";

export async function GET(req: NextRequest) {
  const res = await getCategories();
  return Response.json(res);
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  try {
    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });
    return Response.json(newCategory);
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  const { id, name } = await req.json();

  try {
    const updatedCategory = await prisma.category.update({
      where: { id },
      data: {
        name,
      },
    });
    return Response.json(updatedCategory);
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    await prisma.category.delete({
      where: { id },
    });
    return Response.json({ message: "Category deleted successfully" });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 400 });
  }
}
