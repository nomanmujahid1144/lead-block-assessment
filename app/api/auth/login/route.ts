import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { comparePassword, generateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    
    const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
    
    if (!user.length || !(await comparePassword(password, user[0].password))) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = generateToken(user[0].id);

    return NextResponse.json({ token, user: { id: user[0].id, email: user[0].email, name: user[0].name } });
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 400 });
  }
}