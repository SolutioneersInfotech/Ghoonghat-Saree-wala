import {
  Feather,
  Leaf,
  Waves,
  Wind,
  IndianRupee,
  Palette,
} from "lucide-react";

const filterCategories = [
  {
    title: "Shop by Fabric",
    items: [
      { name: "Silk", count: 245, icon: <Feather className="w-6 h-6 text-pink-500" /> },
      { name: "Cotton", count: 189, icon: <Leaf className="w-6 h-6 text-green-500" /> },
      { name: "Georgette", count: 156, icon: <Waves className="w-6 h-6 text-indigo-500" /> },
      { name: "Chiffon", count: 134, icon: <Wind className="w-6 h-6 text-blue-500" /> },
    ],
  },
  {
  title: "Shop by Color",
  items: [
    { name: "Red", count: 198, color: "bg-red-500", icon: <Palette className="w-5 h-5 text-red-500" /> },
    { name: "Blue", count: 167, color: "bg-blue-500", icon: <Palette className="w-5 h-5 text-blue-500" /> },
    { name: "Green", count: 145, color: "bg-green-500", icon: <Palette className="w-5 h-5 text-green-500" /> },
    { name: "Pink", count: 123, color: "bg-pink-500", icon: <Palette className="w-5 h-5 text-pink-500" /> },
  ],
},
  {
    title: "Shop by Price",
    items: [
      { name: "Under ₹1000", count: 89, icon: <IndianRupee className="w-6 h-6 text-emerald-500" /> },
      { name: "₹1000–₹3000", count: 234, icon: <IndianRupee className="w-6 h-6 text-yellow-500" /> },
      { name: "₹3000–₹5000", count: 156, icon: <IndianRupee className="w-6 h-6 text-orange-500" /> },
      { name: "Above ₹5000", count: 78, icon: <IndianRupee className="w-6 h-6 text-purple-500" /> },
    ],
  },
];


export default function ShopByFilters() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Shop by Your Preference</h2>
          <p className="text-gray-600">Find exactly what you're looking for</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filterCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {category.title === "Shop by Fabric" || category.title === "Shop by Price" ? (
                      <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer shadow-sm group">
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span className="font-medium text-gray-800 group-hover:text-rose-600">{item.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded-full">
                          {item.count}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full ${item.color} mr-3`} />
                          <span className="font-medium text-gray-700 group-hover:text-rose-600">{item.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {item.count}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
