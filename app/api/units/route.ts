import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const createUnitSchema = z.object({
  name: z.string().min(1, "Unit name is required"),
  itemId: z.number().int().positive("Item ID is required"),
});

export async function GET() {
  try {
    const units = await prisma.unit.findMany({
      include: {
        item: true,
      },
      orderBy: {
        name: 'asc',
      },
    });
    return NextResponse.json(units);
  } catch (error) {
    console.error("Error fetching units:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = createUnitSchema.parse(body);

    // Check if unit already exists for this item (case-insensitive)
    const existingUnit = await prisma.unit.findFirst({
      where: {
        name: {
          equals: validatedData.name,
          mode: 'insensitive',
        },
        itemId: validatedData.itemId,
      },
    });

    if (existingUnit) {
      return NextResponse.json(existingUnit);
    }

    const newUnit = await prisma.unit.create({
      data: {
        name: validatedData.name,
        itemId: validatedData.itemId,
      },
      include: {
        item: true,
      },
    });

    return NextResponse.json(newUnit, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error("Error creating unit:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}