import {
  uuid,
  timestamp,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { desc, sql, relations } from "drizzle-orm"
import { orders } from "../orders/order";

export const verificationStatuses = pgEnum("verification_statuses", [
  "pending",
  "accepted",
  "rejected"
]);

export const verifications = pgTable("verificationsStatus", {
    id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),
    created: timestamp("created").defaultNow().notNull(),
    description: varchar("description", { length: 1000 }).notNull(),
    link: varchar("link", { length: 500 }).notNull(),
    status: verificationStatuses("status").notNull().default("pending"),
    resolveDate: timestamp("resolve_date"),
    resolverNotes: varchar("resolver_notes", { length: 5000 }),

    orderId: uuid("order_id")
    .notNull()
    .references(() => orders.id, { onDelete: "cascade" })
});

export const verificationRelations = relations(verifications, ({ one }) => ({
    order: one(orders, {
        fields: [verifications.orderId],
        references: [orders.id],
    }),
}));