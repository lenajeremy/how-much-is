import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ stateId: string }> }
) {
    const { stateId: sid } = await params
    const stateId = parseInt(sid, 10);

    if (isNaN(stateId)) {
        return NextResponse.json({ error: 'Invalid state ID format' }, { status: 400 });
    }

    try {
        const stateExists = await prisma.state.findUnique({
            where: { id: stateId },
            select: { id: true }
        });

        if (!stateExists) {
            return NextResponse.json({ error: 'State not found' }, { status: 404 });
        }

        // Fetch cities for the given state
        const cities = await prisma.city.findMany({
            where: { stateId: stateId },
            orderBy: { name: 'asc' },
            // Select only necessary fields if needed for performance
            // select: { id: true, name: true, latitude: true, longitude: true }
        });

        return NextResponse.json(cities);

    } catch (error) {
        console.error(`Error fetching cities for state ${stateId}:`, error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}