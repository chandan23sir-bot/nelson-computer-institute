import { prisma } from "../../../lib/prisma";

export async function GET() {
  const students = await prisma.student.findMany({ orderBy: { createdAt: "desc" } });
  return Response.json(students);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const student = await prisma.student.create({
      data: {
        admissionNo: body.admissionNo,
        name: body.name,
        mobile: body.mobile || null,
        course: body.course,
        fee: Number(body.fee || 0),
        paid: Number(body.paid || 0)
      }
    });
    return Response.json(student, { status: 201 });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 400 });
  }
}
