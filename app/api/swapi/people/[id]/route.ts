import { NextResponse } from 'next/server';

import https from 'https';
import fetch from 'node-fetch';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const agent = new https.Agent({ rejectUnauthorized: false });

  const response = await fetch(`https://swapi.dev/api/people/${params.id}`, {
    agent,
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch person' },
      { status: 500 }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
