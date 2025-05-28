import { NextRequest, NextResponse } from 'next/server';

import https from 'https';
import fetch from 'node-fetch';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = searchParams.get('page') || '1';
  const search = searchParams.get('search') || '';
  const gender = searchParams.get('gender') || '';

  const query = new URLSearchParams({ page, search, gender });

  const httpsAgent = new https.Agent({ rejectUnauthorized: false });

  const response = await fetch(`https://swapi.dev/api/people?${query}`, {
    agent: httpsAgent,
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch from SWAPI' },
      { status: 500 }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
