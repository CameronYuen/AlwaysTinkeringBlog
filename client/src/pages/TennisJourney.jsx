import React from "react";
import data from "../data/data";
import LatestPostCard from "../components/LatestPostCard";
const TennisJourney = () => {
  const BlogPosts = data.BlogPosts;
  const tennisJourneyPosts = BlogPosts.filter((blog) => blog.tag === "Tennis Journey");

  return (
    <main className="mt-12 px-24 max-sm:px-4">
      <section className="w-10/12 max-md:w-full mx-auto">
        <h1 className="text-5xl text-slate-800 max-sm:text-3xl text-center font-semibold">
          Tennis Journey
        </h1>
        <p className="text-center text-slate-600 mt-4 text-lg">
          My personal tennis journey, lessons learned, and stories from the court.
        </p>

        <div className="postsContainer mt-12 flex flex-col gap-8">
          {tennisJourneyPosts.length > 0 ? (
            tennisJourneyPosts.map((blog) => (
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

export default TennisJourney;
