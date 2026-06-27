import { opportunities } from "@/data/opportunities";

// GET method returns all sample opportunities
export async function GET() {
  return Response.json({
    success: true,
    data: opportunities,
  });
}

// POST method receives a new opportunity
export async function POST(request) {
  const newOpportunity = await request.json();

  return Response.json({
    success: true,
    message: "Opportunity created successfully",
    data: newOpportunity,
  });
}