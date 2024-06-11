import { NextResponse } from "next/server";
import { prisma } from "@/db";
import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { auth } from "@/auth";

export async function POST(req: Request) {
  const session = await auth();
  const formData = await req.formData();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const categoryId = parseInt(formData.get("categoryId") as string);
  const condition = formData.get("condition") as string;
  const image = formData.get("image") as File;

  const buffer = Buffer.from(await image.arrayBuffer());
  const relativeUploadDir = `/uploads/${new Date(Date.now())
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-")}`;
  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    // This is for checking the directory is exist
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      // If the directory doesn't exist (ENOENT : Error No Entry), create one
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e,
      );
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 },
      );
    }
  }

  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${image.name.replace(
      /\.[^/.]+$/,
      "",
    )}-${uniqueSuffix}.${mime.getExtension(image.type)}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    const fileUrl = `${relativeUploadDir}/${filename}`;

    // Save to database
    const newItem = await prisma.simpleItem.create({
      data: {
        title: title,
        description: description,
        price: price,
        condition: condition,
        categoryId: categoryId,
        imgSrc: fileUrl,
        userEmail: session?.user?.email as string,
        username: session?.user?.name as string,
      },
    });
    console.log("Created Item:");
    console.log(newItem);

    return NextResponse.json({ message: "Created Item" }, { status: 200 });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
