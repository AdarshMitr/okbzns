import React, { useState } from "react";
import { motion } from "framer-motion";
import BusinessCard from "./img/Business_Card.png";
import BrandingSolution from"./img/Branding_Solutions.png";
import CorporateGifting from "./img/Corporate_Gifting.png";
import MarketingCollateral from "./img/Marketing_Collateral.png"
const marketingItems = [
  {
    title: "Branding Solutions",
    description:
      "Your brand is an emotional connection, and the visual identity that defines your business.Our Branding Solutions are designed to give your business a distinct and memorable identity that resonates with your target audience.",
    more:
      "We start by understanding your brand's vision, mission, and values, and then translate them into compelling visual assets such as: Brand LOGO, A consistent color palette and typography,customized business stationery (letterheads, envelopes, etc.), Packaging design, Social media & digital branding kits etc.",
    image: BrandingSolution,
  },
  {
    title: "Business Cards",
    description:
      "Our Business Cards are not just modern—they're smart. These cards come embedded with NFC chips that allow anyone to access your digital profile instantly with just a tap on their smartphone.",
    more:
      "For broader compatibility, we also include custom QR codes printed on the cards, ensuring that even older devices can scan and retrieve your contact details, website, social links, or portfolio. Whether you're networking at a conference or meeting a client, it leaves a memorable, tech-savvy impression.",
    image: BusinessCard,
  },
  {
    title: "Corporate Gifting",
    description:
      "Strengthen your relationships with clients and employees through customized corporate gifting solutions that leave a lasting impression.",
    image: CorporateGifting,
  },
  {
    title: "Marketing Collateral",
    description:
      "We design and print brochures, flyers, catalogs, and product portfolios that communicate your brand message effectively.",
    image: MarketingCollateral,
  },
];

const Marketing = () => {
  const [expanded, setExpanded] = useState(Array(marketingItems.length).fill(false));

  const toggleMore = (index) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-600 mb-8"
        >
          Marketing Tools
        </motion.h1>

        <p className="text-center text-lg text-gray-700 mb-10">
          Boost your brand presence with OKBZNS's strategic marketing tools and creative designs.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {marketingItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-1/2 rounded-lg object-cover"
              />
              <div className="md:ml-6 mt-4 md:mt-0">
                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                {item.more && expanded[index] && (
                  <p className="text-gray-600 mt-2">{item.more}</p>
                )}
                {item.more && (
                  <button
                    onClick={() => toggleMore(index)}
                    className="text-blue-600 mt-2 hover:underline"
                  >
                    {expanded[index] ? "View Less" : "View More"}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-gray-600 mt-2">
            Contact OKBZNS to explore how our marketing solutions can make your business unforgettable.
          </p>
          <a
            href="mailto:contact@okbzns.com"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Marketing;
