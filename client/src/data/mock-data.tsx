import type { Article, Centre, PressRelease } from "@shared/schema";

export const mockCentres = [
  {
    id: 1,
    name: "Centre for the Fourth Industrial Revolution",
    description: "Shaping the future of technology governance to ensure technology serves humanity",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Centre for Financial and Monetary Systems",
    description: "Building resilient, inclusive and sustainable financial systems for shared prosperity",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Centre for Nature and Climate",
    description: "Accelerating nature-positive, net-zero climate action at the speed and scale required",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Centre for Health and Healthcare",
    description: "Catalyzing collaborative, data-driven innovation to advance equitable healthcare globally",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Centre for Urban Transformation",
    description: "Creating sustainable, equitable and resilient cities and urban systems",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Centre for Energy and Materials",
    description: "Enabling an inclusive and sustainable energy transition and circular economy",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Centre for Advanced Manufacturing and Supply Chains",
    description: "Driving resilient, sustainable and inclusive manufacturing and supply chain systems",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    name: "Centre for Cybersecurity",
    description: "Building digital trust and security in our interconnected world",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop"
  }
] as Centre[];

export const mockArticles = [
  {
    id: 1,
    title: "Davos 2025: Collaboration in the Intelligent Age",
    description: "World leaders gather to discuss how artificial intelligence can serve humanity and create shared prosperity in an era of unprecedented technological transformation.",
    category: "Annual Meeting 2025",
    contentType: "article" as const,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "The Future of Work: Skills for the Intelligent Age",
    description: "As AI reshapes industries, we explore the critical skills and education systems needed to prepare workers for tomorrow's economy.",
    category: "Future of Work",
    contentType: "article" as const,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Global Supply Chain Resilience: Lessons from Recent Disruptions",
    description: "Industry leaders share strategies for building more robust and sustainable supply chains in an uncertain world.",
    category: "Supply Chains",
    contentType: "video" as const,
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "AI in Healthcare: Transforming Patient Outcomes",
    description: "How artificial intelligence is revolutionizing medical diagnosis, treatment, and accessibility across global healthcare systems.",
    category: "Health & Healthcare",
    contentType: "article" as const,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Climate Finance: Accelerating the Net-Zero Transition",
    description: "Exploring innovative financing mechanisms to support developing countries in their journey toward carbon neutrality.",
    category: "Climate & Environment",
    contentType: "podcast" as const,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1569163139390-de4b08b5ec3c?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Digital Identity: Privacy and Security in the Connected World",
    description: "Balancing personal privacy with security needs as digital identity systems become ubiquitous globally.",
    category: "Cybersecurity",
    contentType: "article" as const,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    title: "Sustainable Cities: Urban Innovation for Climate Action",
    description: "Cities leading the charge in climate action through innovative technology and collaborative governance models.",
    category: "Urban Transformation",
    contentType: "video" as const,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    title: "Financial Inclusion: Digital Banking for the Unbanked",
    description: "How digital financial services are bringing banking to underserved populations worldwide.",
    category: "Financial Systems",
    contentType: "article" as const,
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
  }
] as Article[];

export const mockPressReleases = [
  {
    id: 1,
    title: "World Economic Forum Annual Meeting 2025 to Focus on 'Collaboration in the Intelligent Age'",
    source: "World Economic Forum",
    url: "https://example.com/press1"
  },
  {
    id: 2,
    title: "New WEF Report: AI Could Add $13 Trillion to Global Economy by 2030",
    source: "Reuters",
    url: "https://example.com/press2"
  },
  {
    id: 3,
    title: "Global Leaders Call for Urgent Action on Climate Finance at Davos",
    source: "Financial Times",
    url: "https://example.com/press3"
  },
  {
    id: 4,
    title: "WEF Launches Initiative to Address Global Skills Gap in Digital Economy",
    source: "Bloomberg",
    url: "https://example.com/press4"
  },
  {
    id: 5,
    title: "Public-Private Partnership Models Drive Sustainable Development Goals Progress",
    source: "The Guardian",
    url: "https://example.com/press5"
  }
] as PressRelease[];