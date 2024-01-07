import { NextResponse } from "next/server";
import prisma from "../../../../libs/prismadb"

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
console.log(id);
    const posts = await prisma.post.findMany({
        where:{type:id}
    }); 

    if(!posts) {
        return NextResponse.json(
            {message: "Post not found", err},
            {status: 404}
        )
    }

    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};

  