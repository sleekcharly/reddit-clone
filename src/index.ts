import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

// create an asynchronous main function to handle mikroORM instance
const main = async () => {
  // create a new instance of MikroORM
  const orm = await MikroORM.init(microConfig); // This returns a promise

  // run the migration in code
  await orm.getMigrator().up();

  //   // Create an instance of Post
  //   const post = orm.em.fork({}).create(Post, { title: "my first post" });
  //   // persist to database
  //   await orm.em.fork({}).persistAndFlush(post);

  //   const posts = await orm.em.fork({}).find(Post, {}); // View all posts in the database
  //   console.log(posts);
};

// call main function
main().catch((err) => {
  console.error(err);
});
