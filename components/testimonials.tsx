import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment:
      "Absolutely love the quality of sarees! The silk saree I bought for my wedding was perfect. Fast delivery and excellent customer service.",
    image: "priya-sharma.jpeg",
    sareeImage: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Anita Patel",
    location: "Ahmedabad",
    rating: 5,
    comment:
      "Best online saree shopping experience! The cotton sarees are so comfortable and the colors are exactly as shown. Highly recommended!",
    image: "anita-patel.jpeg",
    sareeImage: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Meera Reddy",
    location: "Hyderabad",
    rating: 5,
    comment:
      "Amazing collection and affordable prices. I've ordered multiple sarees and each one exceeded my expectations. Great quality!",
    image: "meera-reddy.jpeg",
    sareeImage: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy customers who trust us for their saree needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-rose-200" />

              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>

              <div className="flex items-center">
                <Image
                  src={testimonial.sareeImage || "/placeholder.svg"}
                  alt="Customer's saree"
                  width={50}
                  height={50}
                  className="rounded-lg mr-3"
                />
                <span className="text-sm text-gray-500">Purchased saree</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
