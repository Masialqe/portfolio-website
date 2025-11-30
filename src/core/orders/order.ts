import {
  uuid,
  timestamp,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm"
import { verifications } from "../verification/verification";

export const orderStatuses = pgEnum("order_statuses", [
  "pending",
  "in_progress",
  "completed",
  "cancelled",
]);

export const orders = pgTable("orders", {
    id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),
    deadline: timestamp("deadline").notNull(),
    created: timestamp("created").defaultNow().notNull(),
    agrementDate: timestamp("agrement_date"),
    description: varchar("description", { length: 1000 }).notNull(),
    notes: varchar("notes", { length: 1000}),
    status: orderStatuses("status").default("pending").notNull(),
});

export const orderRelations = relations(orders, ({ many }) => ({
    verifications: many(verifications),
}));