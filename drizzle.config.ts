import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { databaseUrl } from '@/drizzle/databaseUrl';

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: databaseUrl,
  },
});