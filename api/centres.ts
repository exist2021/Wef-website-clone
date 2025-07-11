import type { VercelRequest, VercelResponse } from '@vercel/node';

const mockCentres = [
  {
    id: 1,
    name: "Centre for the Fourth Industrial Revolution",
    description: "Shaping the future of technology governance and innovation",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Centre for Financial and Monetary Systems",
    description: "Building resilient and inclusive financial systems",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop"
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
    res.status(200).json(mockCentres);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}