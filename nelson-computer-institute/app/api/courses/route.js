import { prisma } from "../../../lib/prisma";

export async function GET() {
  return Response.json(await prisma.course.findMany({ orderBy: { createdAt: "desc" } }));
}

export async function POST(req) {
  try {
    const body = await req.json();
    const course = await prisma.course.create({
      data: { name: body.name, duration: body.duration, fee: Number(body.fee || 0), category: body.category || "General" }
    });
    return Response.json(course, { status: 201 });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 400 });
  }
}
