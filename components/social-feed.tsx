import Image from "next/image"
import { Instagram, Heart, MessageCircle } from "lucide-react"

const socialPosts = [
  {
    id: 1,
    image: "review-1.jpeg",
    likes: 234,
    comments: 12,
    caption: "Loving this silk saree for my sister's wedding! 💕",
  },
  {
    id: 2,
    image: "review-2.jpeg",
    likes: 189,
    comments: 8,
    caption: "Perfect for office wear - comfortable and elegant",
  },
  {
    id: 3,
    image: "review-3.jpeg",
    likes: 345,
    comments: 23,
    caption: "Festival ready in this gorgeous red saree ✨",
  },
  {
    id: 4,
    image: "review-4.jpeg",
    likes: 156,
    comments: 15,
    caption: "Cotton sarees are my go-to for daily wear",
  },
  {
    id: 5,
    image: "review-5.jpeg",
    likes: 278,
    comments: 19,
    caption: "Party ready! This georgette saree is stunning",
  },
  {
    id: 6,
    image: "review-6.jpeg",
    likes: 198,
    comments: 11,
    caption: "Traditional handloom saree for cultural events",
  },
]

export default function SocialFeed() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="h-8 w-8 text-pink-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">#SareeVillaStyle</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our beautiful customers style their sarees. Tag us for a chance to be featured!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt="Customer styling saree"
                width={300}
                height={300}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs line-clamp-2">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Share your saree moments with us!</p>
          <div className="flex justify-center space-x-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              #SareeVillaStyle
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              #TraditionalElegance
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
