import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import HeroImg from "../images/hero.png";

import Subscribe from "../components/Subscribe";
import FeaturedPost from "../components/FeaturedPost";
import LatestPost from "../components/LatestPost";

const Home = () => {
  return (
    <>
      <main className="px-24 mt-5 max-sm:px-5">
        <section className="hero flex justify-between gap-4 items-center max-md:flex-col">
          <div className="content flex flex-col gap-6 w-full">
            <h1 className="text-slate-800 text-6xl font-bold">
              Always Tinkering
            </h1>
            <p className="text-slate-800 text-2xl italic">
              A software engineer’s journey through life, falling into deep dives on tennis, Miatas, travel, gear, and the things I can’t stop tinkering with.
            </p>
            <div className="subscribeBox flex gap-3">
              <input
                className="border border-neutral-200 py-2 px-3 rounded-md"
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
              <button className="bg-slate-800 text-white px-3 py-2 rounded-md">
                Subscribe
              </button>
            </div>
            <div className="socialLinkContainer flex gap-3 items-center">
              <h5>Follow:</h5>
              <ul className="flex gap-3 text-slate-800">
                <li>
                  <Link to="https://twitter.com/yourhandle" target="_blank">
                    <TwitterIcon />
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/yourhandle" target="_blank">
                    <GitHubIcon />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/yourhandle" target="_blank">
                    <InstagramIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="img flex justify-center max-md:hidden">
            <img src={HeroImg} className="rounded-full" alt="Always Tinkering Hero" />
          </div>
        </section>
        <FeaturedPost />
        <LatestPost />
        <Subscribe />
      </main>
    </>
  );
};

export default Home;
