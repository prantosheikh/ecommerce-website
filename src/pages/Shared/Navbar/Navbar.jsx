import { SlMenu, SlHeart, SlUser, SlHandbag } from "react-icons/sl";
import { FaFacebookF, FaTwitter,FaTumblr } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const navbar = (
    <>
      <li className="hover:text-yellow-400">
        <Link>
          <SlUser></SlUser>
        </Link>
      </li>
      <li className="hover:text-yellow-400">
        <Link>
          <SlHeart></SlHeart>
        </Link>
      </li>
      <li className="hover:text-yellow-400">
        <Link>
          <SlHandbag></SlHandbag>
        </Link>
      </li>
      <li className="hover:text-yellow-400">
        <Link>
          <SlMenu onClick={toggleDrawer}> </SlMenu>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start hidden lg:block">
          <div className="join ">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </div>
        <div className="lg:navbar-center">
          <a className="btn btn-ghost normal-case text-xl">Header Logo</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div className="navbar-center ">
              <ul className="flex justify-between gap-8 lg:gap-14 text-2xl px-1">
                {navbar}
              </ul>
            </div>
          </div>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="bla bla bla px-6 pt-4"
          >
            <div>
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold mt-8 mb-4">Language</h2>
                  <ul className="flex gap-2 flex-col-reverse">
                    <li>English</li>
                    <li>French</li>
                    <li>Arabic</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mt-8 mb-4">Currency</h2>
                  <ul className="flex gap-2 flex-col-reverse">
                    <li>USD US-Dollar </li>
                    <li>Euro</li>
                    <li>Pound</li>
                  </ul>
                </div>
              </div>
              <div>
                <select className="mt-4 outline-none w-full max-w-xs">
                  <option disabled selected>
                    Home
                  </option>
                  <option>
                    {" "}
                    <Link to="/">Home</Link>
                  </option>
                </select>
                <select className="mt-4 outline-none w-full max-w-xs">
                  <option disabled selected>
                    Product
                  </option>
                  <option>
                    {" "}
                    <Link to="/">Product</Link>
                  </option>
                </select>
                <select className="mt-4 outline-none w-full max-w-xs">
                  <option className="p-4" disabled selected>
                    Pages
                  </option>
                  <option>
                    {" "}
                    <Link to="/">Pages</Link>
                  </option>
                </select>
                <select className="mt-4 outline-none w-full max-w-xs">
                  <option disabled selected>
                    Blogs
                  </option>
                  <option>
                    {" "}
                    <Link to="/">Blogs</Link>
                  </option>
                </select>
              </div>
              <div>
                <h2 className="text-lg font-semibold mt-8 mb-4">Contact Us</h2>
                <p>
                  {" "}
                  P69 Halsey St, Ny 10002, New York, United States <br />
                  support.center@helendo.co <br />
                  (0091) 8547 632521
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mt-8 mb-4">Follow US On Socials</h2>
                <div className="flex justify-around gap-6">
                  <FaFacebookF/>
                  <FaTwitter/>
                  <FaTumblr/>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
