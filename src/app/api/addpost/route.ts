import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

type PostCreateInput = {
  title: string;
  content: string;
  published: boolean;
  authorId: number;
};

export async function POST(request: Request) {
  const res: PostCreateInput = await request.json();

  const { title, content, authorId } = res;

  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      authorId,
      updatedAt: new Date(),
    },
  });

  return NextResponse.json({ result });
}
