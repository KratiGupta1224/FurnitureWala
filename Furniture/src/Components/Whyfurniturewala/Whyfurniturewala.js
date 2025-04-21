import React from "react";

const WhyFurnitureWala = () => {
  const features = [
    { icon: "✍️", title: "Handcrafted Excellence" },
    { icon: "✨", title: "Innovative Design" },
    { icon: "🔗", title: "Quality Materials" },
    { icon: "🎨", title: "Customizable Designs" },
    { icon: "💎", title: "Affordable Luxury" },
    { icon: "📐", title: "Expert Design Consultation" },
    { icon: "🚚", title: "Fast & Reliable Delivery" },
    { icon: "⭐", title: "Wide Range Of Collections" },
  ];

  return (
    <div className="text-center py-10 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Why Furniture Wala?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="text-4xl text-purple-600 bg-[#9999FF] p-4 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-700">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyFurnitureWala;
