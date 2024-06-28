import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Faq() {
  const Response2 =
    "Provides smooth navigation within the same page with scrollable sections containing key information and a prominent call to action. Ideal for promoting services and capturing clients without complications.";

  const Response3 =
    "Helps convert leads through conversion-focused design, with clear calls to action, visible contact forms, customer testimonials, and engaging visuals.";

  const Response4 =
    "It offers a product catalog with categories, a shopping cart and secure payment process, advanced search options, and inventory management. All this makes it easier to manage a virtual store and expands the scope of the business.";

  const Response5 =
    "We offer advanced security features such as DDoS protection, web application firewall, and malware scanning. Additionally, they use high-performance NVMe storage and provide unlimited bandwidth to ensure fast loading times and a fast, secure user experience.";

  return (
    <div className="border-t-1 border-neutral-200 py-12 lg:py-24 bg-neutral-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-24">
        <section className="border-b-1 border-neutral-300 mb-3">
          <h2 className="flex flex-row items-center text-neutral-800 mb-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#a482fb"
                fill="none"
                className="mr-2"
              >
                <path
                  d="M22 7.28336C22 9.92493 19.7611 12.0667 17 12.0667C16.6753 12.0671 16.3516 12.0371 16.0327 11.9772C15.8031 11.9341 15.6883 11.9126 15.6082 11.9248C15.5281 11.937 15.4145 11.9974 15.1874 12.1182C14.545 12.4598 13.7959 12.5805 13.0755 12.4465C13.3493 12.1097 13.5363 11.7056 13.6188 11.2724C13.6688 11.0074 13.545 10.75 13.3594 10.5616C12.5166 9.70577 12 8.55254 12 7.28336C12 4.64178 14.2388 2.5 17 2.5C19.7611 2.5 22 4.64178 22 7.28336Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.4922 7.5H15.5003M18.4922 7.5H18.5003"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M7.50189 21.5H4.71817C4.39488 21.5 4.07021 21.4545 3.77327 21.3269C2.80666 20.9116 2.31624 20.3632 2.08769 20.0202C1.95764 19.825 1.97617 19.5763 2.11726 19.3889C3.23716 17.9015 5.83846 17.003 7.50665 17.0029C9.17484 17.003 11.7714 17.9015 12.8913 19.3889C13.0324 19.5763 13.0509 19.825 12.9209 20.0202C12.6923 20.3632 12.2019 20.9116 11.2353 21.3269C10.9383 21.4545 10.6137 21.5 10.2904 21.5H7.50189Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2855 11.7888C10.2855 13.3201 9.04142 14.5614 7.50676 14.5614C5.97211 14.5614 4.72803 13.3201 4.72803 11.7888C4.72803 10.2575 5.97211 9.01611 7.50676 9.01611C9.04142 9.01611 10.2855 10.2575 10.2855 11.7888Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Faq
          </h2>
        </section>
        <section className="grid gird-cols-1 md:grid-cols-2 mx-auto gap-x-8 mt-12">
          <div>
            <h2 className="text-center sm:text-left mb-6 sm:mb-0 text-[24px] leading-[24px] sm:text-[24px] sm:leading-[32px] xl:text-[ 26px] xl:leading-[36px] text-neutral-800 ">
              Frequent questions:
            </h2>
            <p className="text-center sm:text-left mb-6 sm:mb-0 text-neutral-600">
              Find answers to common questions about your website.
            </p>
          </div>
          <div>
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="How are the web page models different?"
                title="How are web page models different?"
              >
                <p className="text-neutral-600">
                  <span className="font-semibold text-neutral-700 mr-1">
                    One Page:
                  </span>
                  Ideal for a simple online presence, promote services and
                  capture customers without the need for a site complex.
                  Includes scrollable sections and a form integrated contact.
                </p>

                <p className="text-neutral-600 mt-2">
                  <span className="font-semibold text-neutral-700 mr-1">
                    Landing Page:
                  </span>
                  Focused on conversion, with clear calls to action,
                  testimonials and attractive visual elements. Ideal for
                  capturing and convert potential customers.
                </p>

                <p className="text-neutral-600 mt-2">
                  <span className="font-semibold text-neutral-700 mr-1">
                    E-Commerce:
                  </span>
                  Designed to sell products online, with a catalog of products,
                  shopping cart, reviews and management inventory.
                </p>
                <p className="text-neutral-600 mt-2">
                  <span className="font-semibold text-neutral-700 mr-1">
                    Custom Website:
                  </span>
                  Customized to business needs, with options such as portfolios,
                  blogs, learning platforms and more.
                </p>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="What benefits does a One Page offer for a simple online presence?"
                title="What benefits does a One Page offer for a simple online presence?"
              >
                <p className="text-neutral-600">{Response2}</p>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="How does a Landing Page help convert potential customers and what elements does it include?"
                title="How does a Landing Page help convert potential customers and what elements does it include?"
              >
                <p className="text-neutral-600">{Response3}</p>
                <ol className="text-neutral-600">
                  <li className="mt-2">
                    <span className="font-semibold text-neutral-700">
                      Brevity:
                    </span>{" "}
                    Ideally, it should be two or three words.
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold text-neutral-700">
                      Simplicity:
                    </span>{" "}
                    Avoid long or hard-to-spell words.
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold text-neutral-700">
                      Keywords:
                    </span>{" "}
                    Include a keyword from your niche, such as
                    buenosairescafe.com.ar if you sell coffee in Buenos Aires.
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold text-neutral-700">
                      Avoid numbers:
                    </span>{" "}
                    They are difficult to remember and add complication.
                  </li>
                  <li className="mt-2">
                    <span className="font-semibold text-neutral-700">
                      Brand Name:
                    </span>{" "}
                    Use your brand name to maximize recognition.
                  </li>
                </ol>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="What advantages and features does the E-Commerce option offer to sell products online?"
                title="What advantages and features does the E-Commerce option offer to sell products online?"
              >
                <p className="text-neutral-600">{Response4}</p>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="What security and performance services do you offer to improve the user experience?"
                title="What security and performance services do you offer to improve the user experience?"
              >
                <p className="text-neutral-600">{Response5}</p>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Faq;
