"use server";

import { db } from "@/drizzle/db";
import { settings } from "./settings";
import { eq } from "drizzle-orm";
import { count } from "drizzle-orm";

export const settingsService = {
    async get(key: string) : Promise<string | null>{
        var result =  await db
        .select({ value: settings.value })
        .from(settings)
        .where(eq(settings.key, key))
        .limit(1);

        return result.length > 0 ? result[0].value : null;
    },

    async getAll(){
        return await db.select().from(settings);
    }, 
    
    async insert(key: string, value: string) {

        if(await this.isKeyExists(key)) {
            return false;
        }

        var result =  await db.insert(settings).values({
            key,
            value
        }).returning();

        return result.length > 0;
    },

    async update(key: string, value: string) {

        if(await this.isKeyExists(key)) {
            return false;
        }

        return await db.update(settings).set({
            value
        }).where(eq(settings.key, key)).returning();
    },

    async isKeyExists(key: string) : Promise<boolean> {
        const result = await db.select({ count: count() })
        .from(settings)
        .where(eq(settings.key, key));

        return result[0].count > 0;
    }
};  