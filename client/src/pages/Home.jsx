import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import HeroImg from "../images/Cy.jpg";
import MiataImg from "../images/Miata.jpg";
import TravelImg from "../images/halfdome.jpg";
import RacketsImg from "../images/Rackets.jpg";
import TennisJourneyImg from "../images/tennis_journey.jpg";
import LifeImg from "../images/life.jpg";

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
            <img src={HeroImg} className="rounded-full w-48 h-48 object-cover" alt="Always Tinkering Hero" />
          </div>
        </section>

        {/* Explore Categories */}
        <section className="explore mt-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tennis Gear */}
            <Link to="/tennis-gear" className="group relative overflow-hidden rounded-xl h-64 shadow-lg hover:shadow-xl transition-shadow">
              <img src={RacketsImg} alt="Tennis Gear" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Tennis Gear</h3>
                <p className="text-sm opacity-90">Reviews and recommendations</p>
              </div>
            </Link>

            {/* Tennis Journey */}
            <Link to="/tennis-journey" className="group relative overflow-hidden rounded-xl h-64 shadow-lg hover:shadow-xl transition-shadow">
              <img src={TennisJourneyImg} alt="Tennis Journey" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Tennis Journey</h3>
                <p className="text-sm opacity-90">Stories from the court</p>
              </div>
            </Link>

            {/* Miata */}
            <Link to="/miata" className="group relative overflow-hidden rounded-xl h-64 shadow-lg hover:shadow-xl transition-shadow">
              <img src={MiataImg} alt="Miata" className="absolute inset-0 w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Miata</h3>
                <p className="text-sm opacity-90">The roadster life</p>
              </div>
            </Link>

            {/* Travel */}
            <Link to="/travel" className="group relative overflow-hidden rounded-xl h-64 shadow-lg hover:shadow-xl transition-shadow">
              <img src={TravelImg} alt="Travel" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Travel</h3>
                <p className="text-sm opacity-90">Adventures and discoveries</p>
              </div>
            </Link>

            {/* Life */}
            <Link to="/life" className="group relative overflow-hidden rounded-xl h-64 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <img src={LifeImg} alt="Life" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Life</h3>
                <p className="text-sm opacity-90">Thoughts and reflections</p>
              </div>
            </Link>
          </div>
        </section>

        <FeaturedPost />
        <LatestPost />
      </main>
    </>
  );
};

export default Home;
