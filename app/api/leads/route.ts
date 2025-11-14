import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { leads } from '@/db/schema/leads.schema';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');

    let allLeads;
    if (status && status !== 'all') {
      allLeads = await db.select().from(leads).where(eq(leads.status, status));
    } else {
      allLeads = await db.select().from(leads);
    }

    return NextResponse.json(allLeads);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, status } = body;

    const newLead = await db.insert(leads).values({
      name,
      company,
      email,
      status: status || 'Active',
    }).returning();

    return NextResponse.json(newLead[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
  }
}