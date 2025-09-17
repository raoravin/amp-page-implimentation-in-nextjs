import { NextResponse } from 'next/server';
import { getPostBySlug } from '@/lib/posts';
import { generateAMPHTML } from '@/lib/amp-template';

export async function GET(request, { params }) {


  const ampHtml = generateAMPHTML();

  return new NextResponse(ampHtml, {
    status: 200,
    headers: {
      // 'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
