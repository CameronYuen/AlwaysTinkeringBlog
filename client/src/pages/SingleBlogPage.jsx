import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
const SingleBlogPage = () => {
  const { id } = useParams();
  const post = data.BlogPosts.find((blog) => blog.id === id);

  if (!post) {
    return (
      <main className="mt-12 px-24 max-sm:px-4 text-center">
        <h2 className="text-3xl text-slate-800">Post not found</h2>
      </main>
    );
  }

  return (
    <main className="mt-12 px-24 max-sm:px-4">
      <section className="w-10/12 max-md:w-full mx-auto">
        <div className="blogHeader">
          <h1 className="text-5xl text-slate-800 max-sm:text-3xl max-sm:text-center font-semibold">
            {post.title}
          </h1>
          <div className="metaData mt-5 flex max-sm:flex-col max-sm:gap-2 items-center gap-8">
            <div className="author flex items-center gap-2">
              <img
                src={post.authorImg}
                width={30}
                height={30}
                className="rounded-full"
                alt={post.author}
              />
              <h4 className="text-base font-medium text-slate-800 hover:underline underline-offset-8">
                {post.author}
              </h4>
            </div>
            <ul className="list-disc text-base text-neutral-600 flex items-center gap-8">
              <li>{post.date}</li>
              <li>{post.readTime}</li>
            </ul>
          </div>
        </div>

        <div className="blogCoverImg mt-8">
          <img
            src={post.img}
            className="w-full object-cover rounded-xl"
            alt={post.title}
          />
        </div>

        <div
          className="blogContent mt-3 text-slate-800 text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="share text-center mt-12">
          <h4 className="text-xl text-slate-800 font-medium">
            Share This Article
          </h4>
          <ul className="flex justify-center gap-5 max-sm:gap-3 mt-5">
            <li>
              <TwitterIcon />
            </li>
            <li>
              <FacebookOutlinedIcon />
            </li>
            <li>
              <PinterestIcon />
            </li>
            <li>
              <WhatsAppIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <MailOutlineOutlinedIcon />
            </li>
            <li>
              <LinkOutlinedIcon />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default SingleBlogPage;
