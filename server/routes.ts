import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertArticleSchema, insertCentreSchema, insertPressReleaseSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Articles routes
  app.get("/api/articles", async (req, res) => {
    try {
      const articles = await storage.getArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  });

  app.get("/api/articles/featured", async (req, res) => {
    try {
      const articles = await storage.getFeaturedArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch featured articles" });
    }
  });

  app.get("/api/articles/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const articles = await storage.getArticlesByCategory(category);
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch articles by category" });
    }
  });

  app.post("/api/articles", async (req, res) => {
    try {
      const result = insertArticleSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid article data", details: result.error.issues });
      }
      const article = await storage.createArticle(result.data);
      res.status(201).json(article);
    } catch (error) {
      res.status(500).json({ error: "Failed to create article" });
    }
  });

  // Centres routes
  app.get("/api/centres", async (req, res) => {
    try {
      const centres = await storage.getCentres();
      res.json(centres);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch centres" });
    }
  });

  app.post("/api/centres", async (req, res) => {
    try {
      const result = insertCentreSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid centre data", details: result.error.issues });
      }
      const centre = await storage.createCentre(result.data);
      res.status(201).json(centre);
    } catch (error) {
      res.status(500).json({ error: "Failed to create centre" });
    }
  });

  // Press releases routes
  app.get("/api/press-releases", async (req, res) => {
    try {
      const pressReleases = await storage.getPressReleases();
      res.json(pressReleases);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch press releases" });
    }
  });

  app.post("/api/press-releases", async (req, res) => {
    try {
      const result = insertPressReleaseSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid press release data", details: result.error.issues });
      }
      const pressRelease = await storage.createPressRelease(result.data);
      res.status(201).json(pressRelease);
    } catch (error) {
      res.status(500).json({ error: "Failed to create press release" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
