import {
  uuid,
  timestamp,
  varchar
} from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { desc, sql } from "drizzle-orm"


export const videos = pgTable("videos", {
    id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    description: varchar("description", { length: 500 }),
    link: varchar("link", { length: 500 }).notNull(),
    created: timestamp("created").defaultNow().notNull(),
    thumbnailPath: varchar("thumbnail_path", { length: 255 })
});