import { pgTable, varchar, text, timestamp, uuid, unique, uniqueIndex, pgEnum } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const settings = pgTable('app_settings', {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),
  key: varchar("key", { length: 100 }).notNull().unique(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (t) => [
  unique().on(t.key),
  uniqueIndex("app_settings_key_idx").on(t.key)
]);

export enum SettingsKey {
  SiteTitle = "site_title",
  SocialLinks = "social_links",
  MenuLinks = "menu_links",
}
