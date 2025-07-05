import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  contentType: text("content_type").notNull(), // 'article', 'video', 'podcast'
  imageUrl: text("image_url"),
  duration: text("duration"), // for videos
  publishedAt: timestamp("published_at").defaultNow(),
  featured: boolean("featured").default(false),
});

export const centres = pgTable("centres", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  url: text("url"),
});

export const pressReleases = pgTable("press_releases", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  source: text("source").notNull(),
  url: text("url"),
  publishedAt: timestamp("published_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertArticleSchema = createInsertSchema(articles).omit({
  id: true,
  publishedAt: true,
});

export const insertCentreSchema = createInsertSchema(centres).omit({
  id: true,
});

export const insertPressReleaseSchema = createInsertSchema(pressReleases).omit({
  id: true,
  publishedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articles.$inferSelect;

export type InsertCentre = z.infer<typeof insertCentreSchema>;
export type Centre = typeof centres.$inferSelect;

export type InsertPressRelease = z.infer<typeof insertPressReleaseSchema>;
export type PressRelease = typeof pressReleases.$inferSelect;