import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const createItemSchema = z.object({
  name: z.string().min(1, "Item name is required"),
});

export async function GET() {
  try {
    const items = await prisma.item.findMany({
      include: {
        units: true,
      },
      orderBy: {
        name: 'asc',
      },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = createItemSchema.parse(body);

    // Check if item already exists (case-insensitive)
    const existingItem = await prisma.item.findFirst({
      where: {
        name: {
          equals: validatedData.name,
          mode: 'insensitive',
        },
      },
      include: {
        units: true,
      },
    });

    if (existingItem) {
      return NextResponse.json(existingItem);
    }

    // Create new item
    const newItem = await prisma.item.create({
      data: {
        name: validatedData.name,
      },
      include: {
        units: true,
      },
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error("Error creating item:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}