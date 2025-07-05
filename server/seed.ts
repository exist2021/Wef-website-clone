import { db } from "./db";
import { articles, centres, pressReleases } from "@shared/schema";

async function seedDatabase() {
  try {
    console.log("Seeding database...");

    // Clear existing data
    await db.delete(articles);
    await db.delete(centres);  
    await db.delete(pressReleases);

    // Seed centres
    const centresData = [
      { name: "Centre for Regions, Trade and Geopolitics", description: "Shaping global trade and geopolitical relations", imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", url: "/centres/regions-trade-geopolitics" },
      { name: "Centre for the New Economy and Society", description: "Driving economic transformation and social progress", imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", url: "/centres/new-economy-society" },
      { name: "Centre for Nature and Climate", description: "Accelerating action on climate and environmental challenges", imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", url: "/centres/nature-climate" },
      { name: "Centre for Energy and Materials", description: "Transforming energy and materials systems", imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", url: "/centres/energy-materials" },
      { name: "Centre for Advanced Manufacturing and Supply Chains", description: "Revolutionizing manufacturing and supply chains", imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", url: "/centres/manufacturing-supply-chains" },
      { name: "Centre for Health and Healthcare", description: "Advancing global health and healthcare systems", imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", url: "/centres/health-healthcare" },
      { name: "Centre for Cybersecurity", description: "Securing the digital future", imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", url: "/centres/cybersecurity" },
      { name: "Centre for Financial and Monetary Systems", description: "Reforming financial and monetary systems", imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", url: "/centres/financial-monetary-systems" },
      { name: "Centre for Urban Transformation", description: "Creating sustainable urban futures", imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", url: "/centres/urban-transformation" },
      { name: "Centre for the Fourth Industrial Revolution", description: "Harnessing emerging technologies for humanity", imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", url: "/centres/fourth-industrial-revolution" }
    ];

    await db.insert(centres).values(centresData);

    // Seed articles
    const articlesData = [
      { title: "Tourism could be a $16 trillion industry by 2034. This is how destinations can create sustainable growth", description: "Exploring sustainable tourism strategies", category: "Urban Transformation", contentType: "article", imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", featured: true },
      { title: "Summer Davos 2025 Highlights", description: "Key insights from the Annual Meeting of the New Champions", category: "Videos", contentType: "video", imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", duration: "2:35", featured: true },
      { title: "UEFA women's Euro 2025 highlights why we must invest in gender parity to redefine women's sports", description: "Gender equality in sports", category: "Equity, Diversity and Inclusion", contentType: "article", featured: true },
      { title: "Tracking tariffs: Key moments in the US-China trade dispute", description: "Analysis of global trade tensions", category: "Trade and Investment", contentType: "article", featured: true },
      { title: "Tech poised to change the world: Top Ten Emerging Technologies 2025", description: "Revolutionary technologies shaping our future", category: "Emerging Technologies", contentType: "video", featured: true }
    ];

    await db.insert(articles).values(articlesData);

    // Seed press releases
    const pressReleasesData = [
      { title: "What's told about the World Economic Forum in the media", source: "Media Coverage", url: "https://example.com/press1" },
      { title: "Global Leaders Convene for Economic Summit", source: "Reuters", url: "https://example.com/press2" },
      { title: "New Climate Initiatives Launched", source: "Financial Times", url: "https://example.com/press3" }
    ];

    await db.insert(pressReleases).values(pressReleasesData);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDatabase();