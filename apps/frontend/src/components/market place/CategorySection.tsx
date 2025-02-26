import React from 'react';

interface Item {
  image: string;
  title: string;
  price: string;
  discount?: string;  // Make discount optional
  rating: string;
}

interface CategorySectionProps {
  title: string;
  items: Item[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, items = [] }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <div className="h-40 bg-gray-100 flex items-center justify-center mb-4">
              <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{item.price}</p>
            {item.discount && <p className="text-sm text-green-600 mb-1">{item.discount}</p>}
            <p className="text-sm text-yellow-500">{item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
