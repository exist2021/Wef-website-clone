import type { Article, Centre, PressRelease } from "@shared/schema";

export const mockCentres = [
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
  },
  {
    id: 3,
    name: "Centre for Nature and Climate",
    description: "Accelerating nature-positive, net-zero climate action",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Centre for Health and Healthcare",
    description: "Advancing equitable healthcare for all",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Centre for Urban Transformation",
    description: "Building sustainable, inclusive cities",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Centre for Energy and Materials",
    description: "Enabling the energy transition",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop"
  }
] as Centre[];

export const mockArticles = [
  {
    id: 1,
    title: "Tourism could be a $16 trillion climate solution – here's how",
    description: "The travel industry has the potential to become a major force in climate action while creating economic opportunities worldwide.",
    category: "Climate & Environment",
    contentType: "article" as const,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "The future of work: 5 key trends shaping employment in 2025",
    description: "How artificial intelligence, remote work, and new skills are transforming the global job market.",
    category: "Future of Work",
    contentType: "article" as const,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Building resilient supply chains in an uncertain world",
    description: "Strategies for businesses to adapt to disruptions and create more robust global networks.",
    category: "Economy",
    contentType: "video" as const,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Digital transformation in healthcare: Lessons from the pandemic",
    description: "How COVID-19 accelerated innovation in medical technology and patient care.",
    category: "Health",
    contentType: "article" as const,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "The race to net zero: Progress and challenges ahead",
    description: "An analysis of global climate commitments and the path to carbon neutrality.",
    category: "Climate & Environment",
    contentType: "podcast" as const,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1569163139390-de4b08b5ec3c?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Emerging markets: The next frontier of innovation",
    description: "How developing economies are becoming hubs of technological advancement.",
    category: "Economy",
    contentType: "article" as const,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
  }
] as Article[];

export const mockPressReleases = [
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
  },
  {
    id: 3,
    title: "WEF Report Highlights Growing Digital Divide",
    source: "Bloomberg",
    url: "https://example.com/press3"
  }
] as PressRelease[];