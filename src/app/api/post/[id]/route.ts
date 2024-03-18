import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: any) {
  const id = params.id;

  const post = await prisma.post.delete({
    where: { id },
  });

  return NextResponse.json(post);
}

export async function GET(request: Request, { params }: any) {
  const id = params.id;

  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      author: true,
    },
  });

  const authorName = post?.author?.name || "Unknown";

  // 필요한 데이터만 추출하여 반환
  const postData = {
    id: post?.id,
    title: post?.title,
    content: post?.content,
    published: post?.published,
    authorId: post?.authorId,
    createdAt: post?.createdAt,
    updatedAt: post?.updatedAt,
    authorName: authorName, // 작성자 이름 추가
  };

  return NextResponse.json(postData);
}
