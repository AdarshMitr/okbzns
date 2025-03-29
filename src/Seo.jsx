import React from "react";
import { motion } from "framer-motion";
import keywordResearch from "./img/keyword-research.jpg";
import onPageSeo from "./img/on-page-seo.jpg";
import technicalSeo from "./img/technical-seo.jpg";
import contentOptimization from "./img/content-optimization.jpg";
import linkBuilding from "./img/link-building.jpg";
import localSeo from "./img/local-seo.jpg";


const SEOPage = () => {
  const services = [
    {
      title: "Keyword Research & Strategy",
      description:
        "Find the right keywords to attract your target audience. We analyze high-value keywords that match your business niche and ensure your content ranks higher for the right search terms.",
      img: keywordResearch, 
    },
    {
      title: "On-Page SEO Optimization",
      description:
        "Optimize website elements for search engines & users. We refine your website’s meta titles, descriptions, headers, images, and content to improve readability and search engine visibility.",
      img: onPageSeo, 
    },
    {
      title: "Technical SEO",
      description:
        "Ensure fast, mobile-friendly & error-free site performance. Our technical SEO services include Site Speed Optimization, Mobile-Friendliness, Fixing Broken Links & Crawl Errors.",
      img: technicalSeo, 
    },
    {
      title: "Content Optimization & Blogging",
      description:
        "Engaging, SEO-optimized content that ranks! We craft high-quality blogs, articles, and website content optimized for Google’s algorithms, helping you attract organic traffic.",
      img: contentOptimization,
    },
    {
      title: "Link Building & Backlink Strategies",
      description:
        "Earn high-quality backlinks to improve authority & trust. We implement ethical white-hat link-building strategies to boost your domain authority and help you rank higher.",
      img: linkBuilding,
    },
    {
      title: "Local SEO for Small Businesses",
      description:
        "Dominate local searches & Google Maps rankings. We optimize your Google My Business (GMB) profile, manage local citations, and ensure your business appears in local searches.",
      img: localSeo,
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-600 mb-8"
        >
          SEO Optimization Services
        </motion.h1>

        <p className="text-center text-lg text-gray-700 mb-10">
          Boost your online presence with our expert SEO services. Rank higher on search engines and drive organic traffic to your business.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full md:w-1/2 rounded-lg"
              />
              <div className="md:ml-6 mt-4 md:mt-0">
                <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
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
            Ready to Rank Higher? Let’s Get Started!
          </h2>
          <p className="text-gray-600 mt-2">
            Contact us today for a free SEO consultation.
          </p>
          <div className="mt-4">
            <a
              href="mailto:contact@okbzns.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Get a Free SEO Audit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOPage;
