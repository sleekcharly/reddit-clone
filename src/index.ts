import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

// create an asynchronous main function to handle mikroORM instance
const main = async () => {
  // create a new instance of MikroORM
  const orm = await MikroORM.init(microConfig); // This returns a promise

  // Create an instance of Post
  const post = orm.em.create(Post, { title: "my first post" });
  // persist to database
  await orm.em.persistAndFlush(post);
  console.log("-----------sql 2 -------");
  await orm.em.nativeInsert(Post, { title: "My first post 2" });
};

// call main function
main().catch((err) => {
  console.error(err);
});
