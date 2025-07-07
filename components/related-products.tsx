"use client"

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
        {relatedProducts.map((product) => {
          const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

          return (
           <div
  key={product.id}
  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
>
  {/* Image Section */}
  <div className="relative">
    <Image
      src={product.image}
      alt={product.name}
      width={200}
      height={250}
      className="w-full h-56 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
    />

    {/* Discount Badge */}
    {product.discount && (
      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
        {product.discount}% OFF
      </div>
    )}

    {/* Wishlist Icon */}
    <button className="absolute top-3 right-3 p-2 bg-white text-gray-600 rounded-full shadow hover:bg-red-50 hover:text-red-500 transition">
      <Heart className="h-4 w-4" />
    </button>
  </div>

  {/* Info Section */}
  <div className="p-4 flex flex-col justify-between h-full">
    <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
    <p className="text-xs text-gray-500 mb-2">{product.subtitle || "Premium saree with soft finish"}</p>

    {/* Rating */}
    <div className="flex items-center mb-3">
      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
    </div>

    {/* Price and Button */}
    <div className="flex items-center justify-between">
      <div>
        <p className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</p>
        <p className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</p>
      </div>
      <button className="bg-yellow-600 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-gray-800 transition">
        Buy Now 
      </button>
    </div>
  </div>
</div>

          )
        })}
      </div>
    </section>
  )
}
