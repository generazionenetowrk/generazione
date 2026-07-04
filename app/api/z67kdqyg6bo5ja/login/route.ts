import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const COOKIE_NAME = "control_panel_session"

/* Session check — the httpOnly cookie can't be read by client JS */
export async function GET() {
  const store = await cookies()
  return NextResponse.json({ unlocked: store.get(COOKIE_NAME)?.value === "1" })
}

/* Login — password lives only on the server (CONTROL_PANEL_PASSWORD env var).
   Fails closed: if the env var is missing, nobody gets in. */
export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({ password: "" }))
  const expected = process.env.CONTROL_PANEL_PASSWORD

  if (!expected || typeof password !== "string" || password !== expected) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  })
  return res
}

/* Logout */
export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, "", { path: "/", maxAge: 0 })
  return res
}
