import React, { useEffect, useState } from "react";

const statsData = [
  { label: "Happy Clients", value: 500 },
  { label: "Projects Completed", value: 1200 },
  { label: "Years of Experience", value: 10 },
  { label: "Team Members", value: 50 }
];

const StatsSection = () => {
  const [stats, setStats] = useState(statsData.map(stat => ({ ...stat, displayedValue: 0 })));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoaded(true);
      statsData.forEach((stat, index) => {
        setTimeout(() => {
          setStats(prevStats =>
            prevStats.map((s, i) => (i === index ? { ...s, displayedValue: s.value } : s))
          );
        }, index * 500);
      });
    }, 1000); // Initial delay before stats start loading

    return () => clearTimeout(delay);
  }, []);

  return (
    <section className="bg-blue-600 text-white py-20 text-center shadow-lg rounded-lg p-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-xl font-semibold opacity-0 transition-opacity duration-700" style={{ opacity: loaded ? 1 : 0 }}>
            <h3 className="text-3xl font-bold">{stat.displayedValue}+</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default StatsSection;