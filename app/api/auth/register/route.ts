import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { hashPassword, generateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();
    
    const hashedPassword = await hashPassword(password);
    
    const newUser = await db.insert(users).values({
      email,
      password: hashedPassword,
      name,
    }).returning();

    const token = generateToken(newUser[0].id);

    return NextResponse.json({ token, user: { id: newUser[0].id, email: newUser[0].email, name: newUser[0].name } });
  } catch (error) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 400 });
  }
}