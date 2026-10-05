import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const spreadsheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBAPP_URL?.trim();

  if (!spreadsheetUrl) {
    return NextResponse.json(
      { ok: false, error: "Google Sheets URL not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch(spreadsheetUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await response.json();

    if (!response.ok || data.ok === false) {
      return NextResponse.json(
        { ok: false, error: data.error || "Failed to save to Google Sheets" },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("RSVP API error:", error);

    let errorMessage = "Failed to process RSVP";

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        errorMessage = "Timeout connecting to Google Sheets. The server may be blocking outbound connections.";
      } else if (error.message.includes("timeout") || error.message.includes("ECONNREFUSED")) {
        errorMessage = "Could not connect to Google Sheets. Check your network or firewall settings.";
      } else {
        errorMessage = error.message;
      }
    }

    return NextResponse.json(
      { ok: false, error: errorMessage },
      { status: 500 }
    );
  }
}
