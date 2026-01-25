import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data";

const Tags = () => {
  const BlogPosts = data.BlogPosts;

  // Get unique tags and count posts per tag
  const tagCounts = BlogPosts.reduce((acc, post) => {
    acc[post.tag] = (acc[post.tag] || 0) + 1;
    return acc;
  }, {});

  const categories = [
    { name: "Tennis Gear", path: "/tennis-gear", color: "bg-blue-600" },
    { name: "Tennis Journey", path: "/tennis-journey", color: "bg-green-600" },
    { name: "Miata", path: "/miata", color: "bg-red-600" },
    { name: "Travel", path: "/travel", color: "bg-purple-600" },
    { name: "Life", path: "/life", color: "bg-orange-600" },
  ];

  return (
    <section className="mt-12 px-24 max-sm:px-4">
      <h2 className="text-center text-5xl text-slate-800 font-semibold">
        Categories
      </h2>
      <div className="tagContainer flex flex-wrap gap-8 mt-12 justify-center">
        {categories.map((category) => {
          const count = tagCounts[category.name] || 0;
          return (
            <Link key={category.name} to={category.path}>
              <div className="tagCard border border-neutral-200 rounded-lg w-80 flex items-center justify-between p-5 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="tagDesc">
                  <h5 className="text-xl font-semibold text-slate-800">
                    {category.name}
                  </h5>
                  <small className="text-base text-neutral-600">
                    {count} {count === 1 ? 'post' : 'posts'}
                  </small>
                </div>
                <div className={`${category.color} w-16 h-16 rounded-md flex items-center justify-center`}>
                  <span className="text-white text-2xl font-bold">
                    {count}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Tags;
