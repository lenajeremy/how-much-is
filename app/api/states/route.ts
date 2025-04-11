import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; // Import the shared instance

export async function GET() {
  try {
    const states = await prisma.state.findMany({
      orderBy: { name: 'asc' },
    });
    return NextResponse.json(states);
  } catch (error) {
    console.error("Error fetching states:", error);
    // Provide a generic error message to the client
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
