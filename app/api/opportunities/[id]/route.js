import { opportunities } from "@/data/opportunities";

// GET one opportunity by id
export async function GET(request, context) {
  const { id } = await context.params;

  const opportunity = opportunities.find(
    (item) => String(item.id) === String(id)
  );

  if (!opportunity) {
    return Response.json(
      {
        success: false,
        message: "Opportunity not found",
      },
      { status: 404 }
    );
  }

  return Response.json({
    success: true,
    data: opportunity,
  });
}

// Update opportunity
export async function PUT(request, context) {
  const { id } = await context.params;
  const body = await request.json();

  return Response.json({
    success: true,
    message: `Opportunity ${id} updated successfully.`,
    data: body,
  });
}

// Delete opportunity
export async function DELETE(request, context) {
  const { id } = await context.params;

  return Response.json({
    success: true,
    message: `Opportunity ${id} deleted successfully.`,
  });
}