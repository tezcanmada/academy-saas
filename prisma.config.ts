import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  datasource: {
    // Prisma CLI (db push komutu) artık migrations için doğrudan bu 5432 portlu linki okuyacak
    url: env("DIRECT_URL"), 
  },
});