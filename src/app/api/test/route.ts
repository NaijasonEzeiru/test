import { NextResponse } from 'next/server';

export function GET(req: Request, res: Response) {
  return NextResponse.json('<h1>Test Works!!!</>');
}
