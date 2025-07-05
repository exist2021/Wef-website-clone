import { 
  users, articles, centres, pressReleases,
  type User, type InsertUser,
  type Article, type InsertArticle,
  type Centre, type InsertCentre,
  type PressRelease, type InsertPressRelease
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Articles
  getArticles(): Promise<Article[]>;
  getArticlesByCategory(category: string): Promise<Article[]>;
  getFeaturedArticles(): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
  
  // Centres
  getCentres(): Promise<Centre[]>;
  createCentre(centre: InsertCentre): Promise<Centre>;
  
  // Press Releases
  getPressReleases(): Promise<PressRelease[]>;
  createPressRelease(pressRelease: InsertPressRelease): Promise<PressRelease>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getArticles(): Promise<Article[]> {
    return await db.select().from(articles);
  }

  async getArticlesByCategory(category: string): Promise<Article[]> {
    return await db.select().from(articles).where(eq(articles.category, category));
  }

  async getFeaturedArticles(): Promise<Article[]> {
    return await db.select().from(articles).where(eq(articles.featured, true));
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const [article] = await db
      .insert(articles)
      .values(insertArticle)
      .returning();
    return article;
  }

  async getCentres(): Promise<Centre[]> {
    return await db.select().from(centres);
  }

  async createCentre(insertCentre: InsertCentre): Promise<Centre> {
    const [centre] = await db
      .insert(centres)
      .values(insertCentre)
      .returning();
    return centre;
  }

  async getPressReleases(): Promise<PressRelease[]> {
    return await db.select().from(pressReleases);
  }

  async createPressRelease(insertPressRelease: InsertPressRelease): Promise<PressRelease> {
    const [pressRelease] = await db
      .insert(pressReleases)
      .values(insertPressRelease)
      .returning();
    return pressRelease;
  }
}

export const storage = new DatabaseStorage();