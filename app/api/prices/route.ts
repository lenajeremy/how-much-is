import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';

// GET Request Handler
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const stateId = searchParams.get('stateId');
    const cityId = searchParams.get('cityId');
    const marketId = searchParams.get('marketId');
    const itemId = searchParams.get('itemId');
    const unitId = searchParams.get('unitId');

    // Build where clause based on provided filters
    const where: any = {};
    
    if (marketId) {
      where.marketId = parseInt(marketId);
    } else if (cityId) {
      where.market = {
        cityId: parseInt(cityId)
      };
    } else if (stateId) {
      where.market = {
        city: {
          stateId: parseInt(stateId)
        }
      };
    }

    if (itemId) {
      where.itemId = parseInt(itemId);
    }

    if (unitId) {
      where.unitId = parseInt(unitId);
    }

    const [priceReports, total] = await Promise.all([
      prisma.priceReport.findMany({
        where,
        include: {
          item: true,
          unit: true,
          market: {
            include: {
              city: {
                include: {
                  state: true,
                },
              },
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.priceReport.count({ where }),
    ]);

    // Transform the data for the response
    const formattedReports = priceReports.map(report => ({
      id: report.id,
      price: report.price,
      createdAt: report.createdAt,
      updatedAt: report.updatedAt,
      itemName: report.item.name,
      unitName: report.unit.name,
      marketName: report.market.name,
      cityName: report.market.city.name,
      stateName: report.market.city.state.name,
      itemId: report.itemId,
      unitId: report.unitId,
      marketId: report.marketId,
      cityId: report.market.cityId,
      stateId: report.market.city.stateId,
    }));

    return NextResponse.json({
      data: formattedReports,
      metadata: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      }
    });
  } catch (error) {
    console.error('Failed to fetch price reports:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST Request Handler
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { price, itemId, unitId, marketId } = body;

    // Basic validation
    if (price === undefined || !itemId || !unitId || !marketId) {
      return NextResponse.json({ error: 'Missing required fields: price, itemId, unitId, marketId' }, { status: 400 });
    }

    // No need to find ItemUnit - use itemId and unitId directly

    const newPriceReport = await prisma.priceReport.create({
      data: {
        price: parseFloat(price),
        itemId: parseInt(itemId, 10),
        unitId: parseInt(unitId, 10),
        marketId: parseInt(marketId, 10),
      },
      include: {
        item: true,
        unit: true,
        market: {
          include: {
            city: {
              include: {
                state: true,
              },
            },
          },
        },
      },
    });

    // Map the created report to the desired response format
    const formattedReport = {
        id: newPriceReport.id,
        price: newPriceReport.price,
        createdAt: newPriceReport.createdAt,
        updatedAt: newPriceReport.updatedAt,
        itemName: newPriceReport.item.name,
        unitName: newPriceReport.unit.name,
        marketName: newPriceReport.market.name,
        cityName: newPriceReport.market.city.name,
        stateName: newPriceReport.market.city.state.name,
        itemId: newPriceReport.itemId,
        unitId: newPriceReport.unitId,
        marketId: newPriceReport.marketId,
        cityId: newPriceReport.market.cityId,
        stateId: newPriceReport.market.city.stateId,
    };

    return NextResponse.json(formattedReport, { status: 201 });
  } catch (error) {
    console.error("Failed to create price report:", error);
    // Check if error is a known Prisma request error before accessing code
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle known Prisma errors (e.g., foreign key constraint violation)
        if (error.code === 'P2003') {
             return new NextResponse(`Invalid foreign key: Ensure item, unit, or market exists.`, { status: 400 });
        }
    }
    if (error instanceof SyntaxError) { // JSON parsing error
        return new NextResponse('Invalid JSON body', { status: 400 });
    }
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}