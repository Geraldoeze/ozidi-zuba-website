import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { compare } from "bcryptjs";
import { createSession } from "@/lib/auth";
import { initDB as dbInit } from "@/lib/db";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields." }, { status: 400 });
  }

  await dbInit(); // ensure tables + seeded users exist

  const { rows } = await sql`
    SELECT * FROM users WHERE email = ${email} LIMIT 1
  `;

  const user = rows[0];
  if (!user) {
    return NextResponse.json(
      { error: "Invalid email or password." },
      { status: 401 }
    );
  }

  const valid = await compare(password, user.password_hash);
  if (!valid) {
    return NextResponse.json(
      { error: "Invalid email or password." },
      { status: 401 }
    );
  }

  await createSession({ userId: user.id, email: user.email });

  return NextResponse.json({ ok: true });
}
