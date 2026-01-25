import React from "react";
import data from "../data/data";
import LatestPostCard from "../components/LatestPostCard";
const Travel = () => {
  const BlogPosts = data.BlogPosts;
  const travelPosts = BlogPosts.filter((blog) => blog.tag === "Travel");

  return (
    <main className="mt-12 px-24 max-sm:px-4">
      <section className="w-10/12 max-md:w-full mx-auto">
        <h1 className="text-5xl text-slate-800 max-sm:text-3xl text-center font-semibold">
          Travel
        </h1>
        <p className="text-center text-slate-600 mt-4 text-lg">
          Travel stories, tips, and discoveries from around the world.
        </p>

        <div className="postsContainer mt-12 flex flex-col gap-8">
          {travelPosts.length > 0 ? (
            travelPosts.map((blog) => (
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

export default Travel;
