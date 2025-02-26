import React from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "The team provided exceptional service and helped grow our online presence tremendously.",
    company: "ABC Corp",
  },
  {
    name: "Jane Smith",
    feedback:
      "Highly professional and dedicated team. Their marketing tools were a game-changer!",
    company: "XYZ Ltd",
  },
];

const Testimony = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-left"
            >
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <h4 className="text-blue-600 font-semibold mt-4">
                - {testimonial.name}, {testimonial.company}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
