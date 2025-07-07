"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Share2,
  Star,
  ShoppingBag,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: "Royal Silk Wedding Saree",
    price: 4999,
    originalPrice: 6999,
    rating: 4.8,
    reviews: 124,
    images: [
      "new-arrival.jpeg",
      "party-wear.jpeg",
      "/saree3.png",
      "/saree4.png",
    ],
    fabric: "Pure Silk",
    color: "Maroon Red",
    work: "Zari Embroidery",
    blouse: "Included",
    length: "5.5 meters",
    care: "Dry Clean Only",
    sizes: ["Free Size", "Petite", "Plus Size"],
  };

  return (
    <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-12">
      {/* LEFT - Image Gallery */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex md:flex-col gap-2">
          {product.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`border rounded-lg overflow-hidden w-16 h-16 ${
                selectedImage === idx ? "ring-2 ring-rose-500" : ""
              }`}
            >
              <Image
                src={img}
                alt={`thumb-${idx}`}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>

        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src={product.images[selectedImage]}
            alt="Selected Saree"
            width={600}
            height={600}
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT - Product Info */}
      <div>
        {/* Top badge + actions */}
        <div className="flex justify-between items-start mb-4">
          <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium">
            {Math.round(
              ((product.originalPrice - product.price) /
                product.originalPrice) *
                100
            )}
            % OFF
          </span>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={isWishlisted ? "text-red-500" : "text-gray-500"}
            >
              <Heart
                className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`}
              />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Title & Rating */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {product.name}
        </h1>
        <div className="flex items-center gap-2 mb-4">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-gray-500">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl font-bold text-gray-900">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-xl line-through text-gray-400">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Select Size</h3>
          <div className="flex gap-3 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-lg border text-sm ${
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
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Quantity</h3>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              -
            </button>
            <span className="font-semibold w-12 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3 mb-6">
          <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 text-sm py-3 rounded-full">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="w-full border-gray-400 text-gray-900 bg-yellow-600 hover:bg-yellow-500 text-sm py-3 rounded-full"
          >
            Buy It Now
          </Button>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          Celebrate tradition with elegance. This royal silk saree features zari
          embroidery and a luxurious blouse piece. Perfect for weddings and
          festive occasions.
        </p>

        {/* Trust Badges */}
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
    </div>
  );
}
