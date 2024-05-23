import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <section className="w-[80%] flex justify-between items-start mx-auto">
        <article className="mb-8 lg:mb-0 lg:w-1/4">
          <h2 className="text-3xl font-bold mb-4">BrainRush</h2>
        </article>
        <nav className="flex flex-col lg:flex-row lg:w-3/4 justify-between">
          <article className="flex flex-col gap-4 mb-8 lg:mb-0">
            <h3 className="font-bold">About</h3>
            <ul className="display flex flex-col gap-4">
              <li>
                <a href="/company" className="hover:underline">
                  Company
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact us
                </a>
              </li>
            </ul>
          </article>
          <article className="flex flex-col gap-4 mb-8 lg:mb-0">
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className="display flex flex-col gap-4">
              <li>
                <a href="/qa" className="hover:underline">
                  Q&A
                </a>
              </li>
              <li>
                <a href="/teachers" className="hover:underline">
                  For Teachers
                </a>
              </li>
              <li>
                <a href="/students" className="hover:underline">
                  For Students
                </a>
              </li>
            </ul>
          </article>
          <article className="flex flex-col gap-4">
            <h3 className="font-bold mb-2">Terms and conditions</h3>
            <ul className="display flex flex-col gap-4">
              <li>
                <a href="/terms" className="hover:underline">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/accessibility" className="hover:underline">
                  Inclusion and accessibility policy
                </a>
              </li>
            </ul>
          </article>
        </nav>
      </section>
      <section className="w-[80%] flex justify-between py-6 items-start mx-auto">
        <article className="flex">
          <h2 className="text-3xl font-bold mb-4">Follow us</h2>
          <div className="flex gap-3 ml-10 mt-2">
            <a
              href="https://linkedin.com"
              aria-label="Twitter"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-gray-400"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
