import Image from "next/image"
import { Heart, Star } from "lucide-react"

const relatedProducts = [
  {
    id: 1,
    name: "Elegant Silk Saree",
    price: 3999,
    originalPrice: 5499,
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=250",
  },
  {
    id: 2,
    name: "Designer Party Wear",
    price: 2999,
    originalPrice: 3999,
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=250",
  },
  {
    id: 3,
    name: "Traditional Handloom",
    price: 1999,
    originalPrice: 2799,
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=250",
  },
  {
    id: 4,
    name: "Cotton Casual Saree",
    price: 1299,
    originalPrice: 1799,
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=250",
  },
]

export default function RelatedProducts() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={250}
                height={300}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white text-gray-600 hover:bg-red-50 hover:text-red-500 transition-colors">
                <Heart className="h-4 w-4" />
              </button>
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
