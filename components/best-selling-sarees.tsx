"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag, Star, ChevronLeft, ChevronRight } from "lucide-react"

const sarees = [
  {
    id: 1,
    name: "Royal Silk Wedding Saree",
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    reviews: 124,
    image: "royal-silk-saree.webp",
    fabric: "Pure Silk",
    colors: ["Red", "Maroon", "Gold"],
  },
  {
    id: 2,
    name: "Elegant Cotton Saree",
    price: 1299,
    originalPrice: 1799,
    rating: 4.6,
    reviews: 89,
    image: "elegant-cotton-saree.jpeg",
    fabric: "Cotton",
    colors: ["Blue", "Green", "Pink"],
  },
  {
    id: 3,
    name: "Designer Party Wear",
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviews:74,
    image:"designer-party-wear.jpeg",
    fabric: "Georgette",
    colors: ["Purple", "Black", "Navy"],
  },
  {
    id: 4,
    name: "Traditional Handloom",
    price: 2199,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 67,
    image: "traditional-handloom-saree.jpeg",
    fabric: "Handloom",
    colors: ["Orange", "Yellow", "Red"],
  },
  {
    id: 5,
    name: "Modern Chiffon Saree",
    price: 1899,
    originalPrice: 2499,
    rating: 4.5,
    reviews: 92,
    image: "modern-chiffen-saree.jpeg",
    fabric: "Chiffon",
    colors: ["Mint", "Peach", "Lavender"],
  },
]

export default function BestSellingSarees() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sarees.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sarees.length) % sarees.length)
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Best Selling Sarees</h2>
            <p className="text-gray-600">Loved by thousands of customers</p>
          </div>
          <div className="hidden md:flex space-x-2">
            <Button variant="outline" size="sm" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {sarees.map((saree) => (
                <div key={saree.id} className="w-full flex-shrink-0 px-2">
                  <SareeCard saree={saree} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {sarees.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-rose-500" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sarees.map((saree) => (
            <SareeCard key={saree.id} saree={saree} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SareeCard({ saree }: { saree: any }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <Image
          src={saree.image || "/placeholder.svg"}
          alt={saree.name}
          width={300}
          height={400}
          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          {Math.round(((saree.originalPrice - saree.price) / saree.originalPrice) * 100)}% OFF
        </div>
        <button
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isWishlisted ? "bg-red-500 text-white" : "bg-white text-gray-600 hover:bg-red-50"
          }`}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </button>
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" className="w-full bg-rose-500 hover:bg-rose-600 text-white">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{saree.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600 ml-1">{saree.rating}</span>
            <span className="text-sm text-gray-400 ml-1">({saree.reviews})</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-800">₹{saree.price.toLocaleString()}</span>
            <span className="text-sm text-gray-400 line-through ml-2">₹{saree.originalPrice.toLocaleString()}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">{saree.fabric}</p>
      </div>
    </div>
  )
}
