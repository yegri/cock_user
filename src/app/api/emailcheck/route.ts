import prisma from "@/app/lib/prisma";

interface RequestBody {
  email: string;
}

export async function POST(request: Request, response: Response) {
  const body: RequestBody = await request.json();

  const existingUser = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  console.log(existingUser);

  if (existingUser) {
    return response.status;
  }

  return response.ok;
}
