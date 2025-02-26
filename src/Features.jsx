import { FaBullhorn, FaSearch, FaLaptopCode, FaCogs } from "react-icons/fa";




const features = [
    {
      icon: <FaBullhorn size={40} className="text-blue-600" />,
      title: "Marketing Tools",
      description: "NFC cards, Brochures, Product Portfolio, Corporate Giftings, and more to enhance your business reach."
    },
    {
      icon: <FaSearch size={40} className="text-blue-600" />,
      title: "SEO Optimization",
      description: "Improve your online presence and rank higher on search engines with our expert SEO solutions."
    },
    {
      icon: <FaLaptopCode size={40} className="text-blue-600" />,
      title: "Web Development",
      description: "Custom-built websites and applications tailored to your business needs for better engagement."
    },
    {
      icon: <FaCogs size={40} className="text-blue-600" />,
      title: "Customized Engineering Solutions",
      description: "Tailored engineering solutions to meet specific industry needs and optimize operations."
    }
  ];

function Features () {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-700 mt-2 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;