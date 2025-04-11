import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


export async function GET(
  request: Request,
  { params }: { params: { cityId: string } }
) {
  const cityId = parseInt(params.cityId, 10);

  if (isNaN(cityId)) {
    return NextResponse.json({ error: 'Invalid city ID format' }, { status: 400 });
  }

  try {
    const cityExists = await prisma.city.findUnique({
      where: { id: cityId },
      select: { id: true },
    });

    if (!cityExists) {
      return NextResponse.json({ error: 'City not found' }, { status: 404 });
    }

    const markets = await prisma.market.findMany({
      where: { cityId: cityId },
      orderBy: { name: 'asc' },
      // select: { id: true, name: true } // Select specific fields if needed
    });

    return NextResponse.json(markets);

  } catch (error) {
    console.error(`Error fetching markets for city ${cityId}:`, error);
    // Note: No need to disconnect prisma here
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
  // Remove the finally block
  // finally {
  //   await prisma.$disconnect().catch(console.error);
  // }
}