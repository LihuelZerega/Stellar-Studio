import React from "react";

function Resourses() {
  return (
    <div>
      <section className="py-10 bg-neutral-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              Take advantage of our resources to get the most out of your
              postcrats card
            </h2>
          </div>

          <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
            <div className="md:px-4 lg:px-10">
              <img
                className="-rotate-1 rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg"
                alt=""
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight text-neutral-800">
                Educational Blog
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Read articles on financial management and Student Councils.
              </p>
            </div>

            <div className="md:px-4 lg:px-10">
              <img
                className="rotate-1 rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg"
                alt=""
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight text-neutral-800">
                Guides and tutorials
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Access detailed guides to better understand and use your card.
              </p>
            </div>

            <div className="md:px-4 lg:px-10">
              <img
                className="-rotate-1 rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
                alt=""
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight text-neutral-800">
                Webinars and Workshops
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Participate in webinars and online workshops on personal
                finance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resourses;
