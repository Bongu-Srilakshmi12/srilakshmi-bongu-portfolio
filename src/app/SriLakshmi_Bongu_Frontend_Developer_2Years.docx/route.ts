import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL('/assets/SriLakshmi_Bongu_Frontend_Developer_2Years.docx', request.url);
  return NextResponse.redirect(url, 307);
}
