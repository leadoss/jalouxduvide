import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = "https://script.google.com/macros/s/AKfycbzafAck_vV7-2YpF6Snh-k4cJHZsOR1E4hgTDJACfzJ8ZxBpApJUPwb9E93NqVfVLZj/exec";

  const body = await req.json();

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "follow",
    });
    const text = await res.text();
    console.log("[order] Apps Script response:", res.status, text);
    return NextResponse.json({ ok: true, scriptStatus: res.status, scriptResponse: text });
  } catch (err) {
    console.error("[order] Failed to reach sheet:", err);
    return NextResponse.json({ error: "Failed to reach sheet" }, { status: 500 });
  }
}
