import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    glob: "!(*.d).{js,ts}", // how to match migration files (all .js and .ts files, but not .d.ts)
  },
  entities: [Post], // This corresponds to our database tables
  dbName: "reddit_clone", // sets the database name
  type: "postgresql", // sets the type of database
  user: "postgres",
  password: "postgres",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
