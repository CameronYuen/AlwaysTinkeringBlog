import React from "react";
import data from "../data/data";
import LatestPostCard from "../components/LatestPostCard";
const Life = () => {
  const BlogPosts = data.BlogPosts;
  const lifePosts = BlogPosts.filter((blog) => blog.tag === "Life");

  return (
    <main className="mt-12 px-24 max-sm:px-4">
      <section className="w-10/12 max-md:w-full mx-auto">
        <h1 className="text-5xl text-slate-800 max-sm:text-3xl text-center font-semibold">
          Life
        </h1>
        <p className="text-center text-slate-600 mt-4 text-lg">
          Thoughts, reflections, and stories about life, work, and everything in between.
        </p>

        <div className="postsContainer mt-12 flex flex-col gap-8">
          {lifePosts.length > 0 ? (
            lifePosts.map((blog) => (
              <LatestPostCard key={blog.id} {...blog} />
            ))
          ) : (
            <div className="text-center text-slate-600 py-12">
              <p className="text-xl">No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Life;
