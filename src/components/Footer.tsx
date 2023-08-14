import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pb-2">
      {/* footer + newsletter container */}
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        {/* newsletter starts*/}
        <div className="mx-auto max-w-md">
          <span className="block text-xl text-center text-gray-900 sm:text-3xl">
            Subscribe to our Newsletter!
          </span>
          {/* form */}
          <form className="mt-6">
            <div className="relative max-w-lg">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              {/* input */}
              <input
                type="email"
                placeholder="Your e-mail..."
                className="w-full border border-gray-300 rounded-full bg-gray-100 p-4 pe-32 text-sm font-medium focus:outline-none"
              />
              {/* subscribe button */}
              <button className="absolute top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 rounded-full px-5 py-3 text-sm font-medium text-white right-1 transition">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        {/* newsletter ends */}

        {/* footer container starts */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32">
          {/* social medias column container */}
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center lg:text-left text-gray-500 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae minus officiis quam veniam nam repellat delectus
              laborum modi quis iusto?
            </p>
            {/* social icons */}
            <div className="mt-6 flex justify-center lg:justify-start items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white flex justify-center items-center shadow-xl rounded-full text-2xl text-blue-700 hover:opacity-70 hover:scale-110 transition"
              >
                <BsFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white flex justify-center items-center shadow-xl rounded-full text-2xl text-red-400 hover:opacity-70 hover:scale-110 transition"
              >
                <BsInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white flex justify-center items-center shadow-xl rounded-full text-2xl text-blue-500 hover:opacity-70 hover:scale-110 transition"
              >
                <BsTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white flex justify-center items-center shadow-xl rounded-full text-2xl text-blue-900 hover:opacity-70 hover:scale-110 transition"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          {/* footer nav */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
            {/* Help and Information Menu */}
            <div>
              <span className="font-medium text-gray-900">
                Help and Information
              </span>
              <nav
                className="flex flex-col gap-2 mt-6"
                aria-label="Help and Information Nav"
              >
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Help
                </a>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Track order
                </a>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Delivery & returns
                </a>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Sitemap
                </a>
              </nav>
            </div>
            {/* About Menu */}
            <div>
              <span className="font-medium text-gray-900">About</span>
              <nav className="flex flex-col gap-2 mt-6" aria-label="About Nav">
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Corporate Responsibility
                </a>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Investor's Site
                </a>
              </nav>
            </div>
            {/* More from Us Menu */}
            <div>
              <span className="font-medium text-gray-900">More from Us</span>
              <nav
                className="flex flex-col gap-2 mt-6"
                aria-label="More from Us Nav"
              >
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Mobile Apps
                </a>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  E-gift cards
                </a>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Refer a Friend
                </a>
                <a
                  href="#"
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  Marketplace
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* Copyrights */}
        <div className="mt-16 border-t border-gray-300 pt-8">
          <p className="text-center text-xs text-gray-500">
            Created by RF © Copyright. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
