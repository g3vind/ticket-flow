import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "ticket deleted" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ message: "error in deleting tickets" }, error, {
      status: 500,
    });
  }
}
