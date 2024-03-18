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
  });

  return NextResponse.json(post);
}
