import type { VercelRequest, VercelResponse } from '@vercel/node';

const mockPressReleases = [
  {
    id: 1,
    title: "What's told about the World Economic Forum's Annual Meeting 2025",
    source: "Reuters",
    url: "https://example.com/press1"
  },
  {
    id: 2,
    title: "Global Leaders Gather at Davos to Address Climate Crisis",
    source: "Financial Times",
    url: "https://example.com/press2"
  }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json(mockPressReleases);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}