import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import { stat, readFile } from "fs/promises";
import mime from "mime";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { path } = req.query;

  if (!path) {
    return res.status(400).json({ error: "Path is required." });
  }

  const filePath = join(
    process.cwd(),
    "uploads",
    ...(Array.isArray(path) ? path : [path]),
  );

  try {
    await stat(filePath);
    const fileContents = await readFile(filePath);
    res.setHeader(
      "Content-Type",
      mime.getType(filePath) || "application/octet-stream",
    );
    res.send(fileContents);
  } catch (error) {
    res.status(404).json({ error: "File not found." });
  }
}
