import React from "react";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaSketch,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiGooglecloud,
  SiGoogleanalytics,
  SiGoogletagmanager,
} from "react-icons/si";

function Tecnology() {
  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-50">
      <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <section className="flex flex-col items-start justify-start w-full space-y-4 mb-12">
          <div className="">
            <strong className="text-[32px] leading-[44px] text-neutral-800">
              Developed Technology
            </strong>
            <div className="flex flex-col md:flex-row mt-4">
              <div className="space-y-4 md:w-2/3">
                <p className="mb-0 text-neutral-600">
                  We are proud to develop cutting-edge technology that drives
                  innovation and transforms the way Companies interact with the
                  digital world. Our technology is based on a user-centered
                  approach and is designed to deliver exceptional digital
                  experiences that generate a significant impact on our clients
                  and their hearings.
                </p>
                <p className="mb-0 text-neutral-600">
                  Our technological solutions cover a wide range of areas, from
                  web design and application development to search engine
                  optimization and analytics data. We use the latest tools and
                  technologies in each stage of the development process to
                  ensure that our solutions are agile, scalable and secure.
                </p>
                <p className="mb-0 text-neutral-600">
                  The importance of our technology in the industry lies in its
                  ability to help companies adapt and thrive in a constantly
                  evolving digital environment. Our products and services allow
                  companies Make the most of online opportunities, reach new
                  audiences and differentiate themselves in an increasingly
                  competitive.
                </p>
                <p className="mb-0 text-neutral-600">
                  Additionally, our technology stands out for its focus on
                  accessibility, usability and inclusivity, ensuring that our
                  solutions are accessible to everyone and provide exceptional
                  digital experiences no matter the device or user location.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-y-16 mt-6 md:mt-0 md:w-1/3">
                <div className="flex flex-col items-center justify-center">
                  <FaReact className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaVuejs className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaNodeJs className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiMongodb className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiPostgresql className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaAws className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiGooglecloud className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaGithub className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaGitAlt className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaFigma className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FaSketch className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiGoogleanalytics className="text-5xl text-[#a482fb]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <SiGoogletagmanager className="text-5xl text-[#a482fb]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tecnology;
