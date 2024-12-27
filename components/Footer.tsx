import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia, technologyLogos } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 bottom-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-auto opacity-50"
        />
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center z-10 relative">
        <h1 className="heading lg:max-w-[45vw]">
          Technologies{" "}
          <span className="text-purple">I&apos;m Comfortable With</span>
        </h1>
        {/* Technologies Section */}
        <div className="mt-10 mb-10 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-1 mt-5">
            {technologyLogos.map((tech) => (
              <div
                key={tech.id}
                className="w-14 h-14 flex justify-center items-center bg-opacity-75 bg-black-200 rounded-full border border-black-300 hover:bg-purple hover:border-purple"
              >
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="rounded-full" // Ensures the image itself is circular
                  width={40}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
        <p className="text-white-200 md:mt-10 my-[-18px] text-center">
          Reach out to me today and let&apos;s discuss how I can help you.
        </p>
        <a
          href="https://www.linkedin.com/in/karthik-pohane-15580a220/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row mt-16 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Karthik Pohane
        </p>

        {/* Social Media Links */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.id === 1 ? undefined : info.link}
              target={info.id === 1 ? undefined : "_blank"}
              rel={info.id === 1 ? undefined : "noopener noreferrer"}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-purple hover:border-purple"
              aria-label={info.name}
              onClick={() => {
                if (info.id === 1) {
                  navigator.clipboard.writeText("kartikpohane0612@gmail.com");
                  alert("Email copied to clipboard!");
                }
              }}
            >
              <img
                src={info.img}
                alt={`${info.name} icon`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
