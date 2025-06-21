"use client"

import { useState } from "react"
import { Heart, Share2, Star, Truck, RotateCcw, Shield, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = {
    name: "Royal Silk Wedding Saree",
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    reviews: 124,
    fabric: "Pure Silk",
    color: "Maroon Red",
    work: "Zari Embroidery",
    blouse: "Included",
    length: "5.5 meters",
    care: "Dry Clean Only",
  }

  const sizes = ["Free Size", "Petite", "Plus Size"]

  return (
    <div className="space-y-6">
      {/* Product title and rating */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <Badge className="bg-red-100 text-red-600 hover:bg-red-100">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </Badge>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={isWishlisted ? "text-red-500" : "text-gray-500"}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 font-semibold">{product.rating}</span>
            <span className="ml-1 text-gray-500">({product.reviews} reviews)</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <span className="text-3xl font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
          <span className="text-xl text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
          <span className="text-green-600 font-semibold">
            You save ₹{(product.originalPrice - product.price).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Product details */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Product Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Fabric:</span>
            <span className="ml-2 font-medium">{product.fabric}</span>
          </div>
          <div>
            <span className="text-gray-500">Color:</span>
            <span className="ml-2 font-medium">{product.color}</span>
          </div>
          <div>
            <span className="text-gray-500">Work:</span>
            <span className="ml-2 font-medium">{product.work}</span>
          </div>
          <div>
            <span className="text-gray-500">Blouse:</span>
            <span className="ml-2 font-medium">{product.blouse}</span>
          </div>
          <div>
            <span className="text-gray-500">Length:</span>
            <span className="ml-2 font-medium">{product.length}</span>
          </div>
          <div>
            <span className="text-gray-500">Care:</span>
            <span className="ml-2 font-medium">{product.care}</span>
          </div>
        </div>
      </div>

      {/* Size selection */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Size</h3>
        <div className="flex space-x-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedSize === size
                  ? "border-rose-500 bg-rose-50 text-rose-600"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Quantity</h3>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
          >
            -
          </button>
          <span className="w-12 text-center font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
          >
            +
          </button>
        </div>
      </div>

      {/* Action buttons */}
      <div className="space-y-3">
        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold"
        >
          <ShoppingBag className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>
        <Button size="lg" variant="outline" className="w-full border-rose-500 text-rose-600 hover:bg-rose-50">
          Buy Now
        </Button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t">
        <div className="text-center">
          <Truck className="h-6 w-6 text-green-500 mx-auto mb-2" />
          <p className="text-xs text-gray-600">Free Shipping</p>
        </div>
        <div className="text-center">
          <RotateCcw className="h-6 w-6 text-blue-500 mx-auto mb-2" />
          <p className="text-xs text-gray-600">Easy Returns</p>
        </div>
        <div className="text-center">
          <Shield className="h-6 w-6 text-purple-500 mx-auto mb-2" />
          <p className="text-xs text-gray-600">Secure Payment</p>
        </div>
      </div>
    </div>
  )
}
