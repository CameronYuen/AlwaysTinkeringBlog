import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-24 mt-20 max-sm:px-4 border-t border-zinc-100 py-20">
      {/* Top Section */}
      <div className="footertop flex justify-between max-md:flex-col max-md:gap-5 max-md:text-center flex-wrap">
        <div className="logoDesc text-center max-md:mb-5">
          <h2 className="text-2xl font-bold text-slate-800">Always Tinkering</h2>
          <p className="text-zinc-600 mt-2">
            A journey through engineering, gear, Miatas, tennis, travel, and life.
          </p>
          <div className="subscribeBox flex gap-3 mt-4 max-w-md mx-auto">
            <input
              className="border border-neutral-200 py-2 px-3 rounded-md flex-1"
              type="email"
              name="email"
              id="footer-email"
              placeholder="Your email address"
            />
            <button className="bg-slate-800 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
          <div className="socialLinkContainer flex gap-3 items-center justify-center mt-4">
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

        <div className="sectionLinks">
          <h5 className="text-zinc-600 text-sm">Tennis</h5>
          <ul className="text-slate-800 font-medium mt-3 gap-3 flex flex-col">
            <li>
              <Link to="/tennis-gear">Tennis Gear</Link>
            </li>
            <li>
              <Link to="/tennis-journey">Tennis Journey</Link>
            </li>
          </ul>
        </div>

        <div className="sectionLinks">
          <h5 className="text-zinc-600 text-sm">Cars</h5>
          <ul className="text-slate-800 font-medium mt-3 gap-3 flex flex-col">
            <li>
              <Link to="/miata">Miata</Link>
            </li>
          </ul>
        </div>

        <div className="sectionLinks">
          <h5 className="text-zinc-600 text-sm">Travel & Life</h5>
          <ul className="text-slate-800 font-medium mt-3 gap-3 flex flex-col">
            <li>
              <Link to="/travel">Travel</Link>
            </li>
            <li>
              <Link to="/life">Life</Link>
            </li>
          </ul>
        </div>

        <div className="sectionLinks">
          <h5 className="text-zinc-600 text-sm">Archive</h5>
          <ul className="text-slate-800 font-medium mt-3 gap-3 flex flex-col">
            <li>
              <Link to="/archive">All Posts</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footerBottom mt-12 flex max-sm:flex-col max-sm:items-center max-sm:gap-3 justify-center">
        <p className="text-slate-800 text-sm">
          &copy; {currentYear} Cam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
