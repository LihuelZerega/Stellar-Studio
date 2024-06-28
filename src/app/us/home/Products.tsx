import React from "react";
import { Tabs } from "@medusajs/ui";
import {
  AcademicCap,
  GlobeEurope,
  ShoppingCart,
  FolderOpen,
  Gift,
  Puzzle,
  Swatch,
  Channels,
  RocketLaunch,
  Newspaper,
  CircleStack,
  Sparkles,
  CogSixTooth,
  CommandLine,
  LightBulb,
  Star,
} from "@medusajs/icons";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

function Products() {
  const ecommerce1 =
    "The process of adding products to the cart and proceeding to checkout is simple and intuitive, minimizing the number of clicks needed. We implement robust security measures such as SSL and provide various payment options to suit customer preferences.";
  const ecommerce2 =
    "We create an inventory management system that automatically updates stock as sales are made. Additionally, we provide customers and the management team with access to a detailed order history.";
  const ecommerce3 =
    "Adapt your online store to different regions by offering localized content, prices, and shipping options. Sell through multiple channels such as marketplaces, social media, and physical stores. Ensure that the customer experience is consistent and coordinated across all sales points.";
  const ecommerce4 =
    "Present your customers with detailed descriptions, high-quality images, and videos of your products. Additionally, we implement a system for the sale and redemption of gift cards.";

  const landing1 =
    "Visible and clear value proposition from the first glance, briefly explaining what you offer, how you will solve the visitor's problem, and why they should choose your offer over others.";
  const landing2 =
    "We create a clean and professional design that directs attention to the value proposition and the call to action (CTA). We use high-quality images and graphics that reinforce your message and do not overload the page with unnecessary elements.";
  const landing3 =
    "We include one or several well-visible and clearly defined CTAs. Ensuring that the text is compelling and stands out in the design, guiding the user towards the desired action, such as signing up, downloading a resource, or making a purchase.";
  const landing4 =
    "Optionally, we add testimonials, reviews, or logos of prominent clients to generate trust and credibility. Social proof is essential to convince visitors that others have already found value in your offer.";

  const onepage1 =
    "We present a clear and direct message, without superfluous information, with each section being brief and focused on the essentials.";
  const onepage2 =
    "We create a clean and professional design with good use of white space, readable fonts, and colors consistent with the brand identity.";
  const onepage3 =
    "We organize the content logically, with clear headings and subheadings. We prioritize the most important information at the beginning to capture the visitor's attention.";
  const onepage4 =
    "We include clear and visible buttons or links that guide the user towards the desired action, such as buying a product, subscribing to a newsletter, or contacting the company.";

  const amedida1 =
    "We understand your needs and objectives. We conduct a detailed analysis of the target audience and competition. We define a development plan that includes the project scope, functional and non-functional requirements, and a detailed timeline.";
  const amedida2 =
    "We create a unique design adapted to the brand identity. We ensure that the design is responsive, accessible, and user-centered, providing an intuitive and pleasant browsing experience on all devices.";
  const amedida3 =
    "We implement functionalities using modern coding technologies and practices. We conduct thorough testing to ensure the site works correctly across different browsers and devices and meets security and performance standards.";
  const amedida4 =
    "We optimize the site's performance to improve loading speed and user experience. We provide a continuous maintenance plan that includes software updates, security monitoring, and improvements based on user feedback and data analysis.";

  return (
    <Tabs defaultValue="1">
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between border-b-1 border-neutral-300">
            <div className="flex flex-row items-center space-x-1 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#a482fb"
                fill="none"
              >
                <path
                  d="M4.5 10.2653V6H19.5V10.2653C19.5 13.4401 19.5 15.0275 18.5237 16.0137C17.5474 17 15.976 17 12.8333 17H11.1667C8.02397 17 6.45262 17 5.47631 16.0137C4.5 15.0275 4.5 13.4401 4.5 10.2653Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.5 6L5.22115 4.46154C5.78045 3.26838 6.06009 2.6718 6.62692 2.3359C7.19375 2 7.92084 2 9.375 2H14.625C16.0792 2 16.8062 2 17.3731 2.3359C17.9399 2.6718 18.2196 3.26838 18.7788 4.46154L19.5 6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M10.5 9H13.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M12 19.5V22M12 19.5L7 19.5M12 19.5H17M7 19.5H4.5C3.11929 19.5 2 20.6193 2 22M7 19.5V22M17 19.5H19.5C20.8807 19.5 22 20.6193 22 22M17 19.5V22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="text-sm font-light text-neutral-600">Products</h1>
            </div>

            <Tabs.List className="hidden lg:block pb-2">
              <Tabs.Trigger value="1" className="text-xs md:text-sm">
                E-commerce
              </Tabs.Trigger>
              <Tabs.Trigger value="2" className="text-xs md:text-sm">
                Landing Page
              </Tabs.Trigger>
              <Tabs.Trigger value="3" className="text-xs md:text-sm">
                One Page
              </Tabs.Trigger>
              <Tabs.Trigger value="4" className="text-xs md:text-sm">
                Tailor-made
              </Tabs.Trigger>
            </Tabs.List>
          </div>

          <Tabs.List className="flex flex-col lg:hidden mt-3">
            <div>
              <Tabs.Trigger value="1" className="text-xs md:text-sm">
                E-commerce
              </Tabs.Trigger>
              <Tabs.Trigger value="2" className="text-xs md:text-sm">
                Landing Page
              </Tabs.Trigger>
              <Tabs.Trigger value="3" className="text-xs md:text-sm">
                One Page
              </Tabs.Trigger>
              <Tabs.Trigger value="4" className="text-xs md:text-sm">
                Tailor-made
              </Tabs.Trigger>
            </div>
            <div></div>
          </Tabs.List>

          <div className="flex flex-col md:flex-row items-start justify-between md:space-x-12 pt-6 sm:pt-10 pb-12">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl text-neutral-800 font-semibold">
                At StellarStudio we prioritize the user experience in each
                delivery, regardless of the size of the company.
              </h1>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <Tabs.Content value="1" className="text-black">
                <Accordion variant="splitted">
                  <AccordionItem
                    key="1"
                    aria-label="Shopping Cart and Payments"
                    title="Shopping Cart and Payments"
                    startContent={<ShoppingCart color="#a482fb" />}
                  >
                    {ecommerce1}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Inventory and Orders"
                    title="Inventory and Orders"
                    startContent={<FolderOpen color="#a482fb" />}
                  >
                    {ecommerce2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Regions and Sales Channels"
                    title="Regions and Sales Channels"
                    startContent={<GlobeEurope color="#a482fb" />}
                  >
                    {ecommerce3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Products, Prices, and Gift Cards"
                    title="Products, Prices, and Gift Cards"
                    startContent={<Gift color="#a482fb" />}
                  >
                    {ecommerce4}
                  </AccordionItem>
                </Accordion>
              </Tabs.Content>
              <Tabs.Content value="2" className="text-black">
                <Accordion variant="splitted">
                  <AccordionItem
                    key="1"
                    aria-label="Clear and Attractive Value Proposition"
                    title="Clear and Attractive Value Proposition"
                    startContent={<Puzzle color="#a482fb" />}
                  >
                    {landing1}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Focused and Attractive Design"
                    title="Focused and Attractive Design"
                    startContent={<Swatch color="#a482fb" />}
                  >
                    {landing2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Clear and Persuasive Calls to Action"
                    title="Clear and Persuasive Calls to Action"
                    startContent={<RocketLaunch color="#a482fb" />}
                  >
                    {landing3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Testimonials and Social Proof"
                    title="Testimonials and Social Proof"
                    startContent={<Newspaper color="#a482fb" />}
                  >
                    {landing4}
                  </AccordionItem>
                </Accordion>
              </Tabs.Content>
              <Tabs.Content value="3" className="text-black">
                <Accordion variant="splitted">
                  <AccordionItem
                    key="1"
                    aria-label="Clarity and Conciseness"
                    title="Clarity and Conciseness"
                    startContent={<Sparkles color="#a482fb" />}
                  >
                    {onepage1}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Attractive Visual Design"
                    title="Attractive Visual Design"
                    startContent={<Swatch color="#a482fb" />}
                  >
                    {onepage2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Information Hierarchy"
                    title="Information Hierarchy"
                    startContent={<CircleStack color="#a482fb" />}
                  >
                    {onepage3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Key Calls to Action"
                    title="Key Calls to Action"
                    startContent={<RocketLaunch color="#a482fb" />}
                  >
                    {onepage4}
                  </AccordionItem>
                </Accordion>
              </Tabs.Content>
              <Tabs.Content value="4" className="text-black">
                <Accordion variant="splitted">
                  <AccordionItem
                    key="1"
                    aria-label="Analysis and Planning"
                    title="Analysis and Planning"
                    startContent={<LightBulb color="#a482fb" />}
                  >
                    {amedida1}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Customized Design"
                    title="Customized Design"
                    startContent={<Star color="#a482fb" />}
                  >
                    {amedida2}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Development and Testing"
                    title="Development and Testing"
                    startContent={<CommandLine color="#a482fb" />}
                  >
                    {amedida3}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Optimization and Maintenance"
                    title="Optimization and Maintenance"
                    startContent={<CogSixTooth color="#a482fb" />}
                  >
                    {amedida4}
                  </AccordionItem>
                </Accordion>
              </Tabs.Content>
            </div>
          </div>
        </div>
      </div>
    </Tabs>
  );
}

export default Products;
