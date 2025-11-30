const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

const encodedPassword = encodeURIComponent(DATABASE_PASSWORD ?? "");

export const databaseUrl = `postgresql://${DATABASE_USERNAME}:${encodedPassword}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;
