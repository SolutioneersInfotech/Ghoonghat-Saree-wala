"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ThumbsUp, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Absolutely beautiful saree! The quality is amazing and the color is exactly as shown. Perfect for my sister's wedding.",
    helpful: 12,
    verified: true,
    images: ["priya-sharma.jpeg"],
    avatar: "/priya-sharma.jpeg",
  },
  {
    id: 2,
    name: "Anita Patel",
    rating: 5,
    date: "1 month ago",
    comment:
      "Love the fabric quality and the zari work is exquisite. Fast delivery and well packaged. Highly recommend!",
    helpful: 8,
    verified: true,
    images: ["/placeholder.svg?height=100&width=100"],
    avatar: "/anita-patel.jpeg",
  },
  {
    id: 3,
    name: "Meera Reddy",
    rating: 4,
    date: "1 month ago",
    comment: "Beautiful saree but the blouse piece could be better quality. Overall satisfied with the purchase.",
    helpful: 5,
    verified: true,
    images: [],
    avatar: "/meera-reddy.jpeg",
  },
]

export default function ProductReviews() {
  const [showAllReviews, setShowAllReviews] = useState(false)

  const averageRating = 4.8
  const totalReviews = 124

  const ratingDistribution = [
    { stars: 5, count: 89, percentage: 72 },
    { stars: 4, count: 25, percentage: 20 },
    { stars: 3, count: 7, percentage: 6 },
    { stars: 2, count: 2, percentage: 1 },
    { stars: 1, count: 1, percentage: 1 },
  ]

  return (
    <section className="py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>

        {/* Rating summary */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">{averageRating}</div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">Based on {totalReviews} reviews</p>
            </div>

            <div className="space-y-2">
              {ratingDistribution.map((rating) => (
                <div key={rating.stars} className="flex items-center space-x-3">
                  <span className="text-sm w-8">{rating.stars}★</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${rating.percentage}%` }} />
                  </div>
                  <span className="text-sm text-gray-600 w-8">{rating.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Individual reviews */}
        <div className="space-y-6">
          {(showAllReviews ? reviews : reviews.slice(0, 2)).map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <Image
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified Purchase
                          </Badge>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{review.comment}</p>

                  {review.images.length > 0 && (
                    <div className="flex space-x-2 mb-4">
                      {review.images.map((image, index) => (
                        <div key={index} className="relative">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt="Review image"
                            width={80}
                            height={80}
                            className="rounded-lg object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                            <Camera className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm">Helpful ({review.helpful})</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAllReviews && reviews.length > 2 && (
          <div className="text-center mt-6">
            <Button
              variant="outline"
              onClick={() => setShowAllReviews(true)}
              className="border-rose-500 text-rose-600 hover:bg-rose-50"
            >
              View All Reviews ({totalReviews})
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
