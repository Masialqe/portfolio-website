import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "./schema";
import { databaseUrl } from './databaseUrl';

export const db = drizzle(databaseUrl, { schema });