import { opportunities } from "@/data/opportunities";

// GET all demo opportunities
export async function GET() {
  return Response.json({
    success: true,
    total: opportunities.length,
    data: opportunities,
  });
}

// Create opportunity demo response
export async function POST(request) {
  const body = await request.json();

  return Response.json(
    {
      success: true,
      message: "Opportunity created successfully.",
      data: {
        id: Date.now().toString(),
        ...body,
      },
    },
    { status: 201 }
  );
}
