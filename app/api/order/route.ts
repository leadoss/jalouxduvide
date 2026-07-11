import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = process.env.GOOGLE_SHEETS_URL;
  if (!url) {
    return NextResponse.json({ error: "Sheet not configured" }, { status: 500 });
  }

  const body = await req.json();

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to reach sheet" }, { status: 500 });
  }
}
