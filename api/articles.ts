import type { VercelRequest, VercelResponse } from '@vercel/node';

const mockArticles = [
  {
    id: 1,
    title: "Tourism could be a $16 trillion climate solution – here's how",
    description: "The travel industry has the potential to become a major force in climate action while creating economic opportunities worldwide.",
    category: "Climate & Environment",
    contentType: "article",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "The future of work: 5 key trends shaping employment in 2025",
    description: "How artificial intelligence, remote work, and new skills are transforming the global job market.",
    category: "Future of Work",
    contentType: "article",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
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
    res.status(200).json(mockArticles);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}