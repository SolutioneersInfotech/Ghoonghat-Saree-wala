import { Search } from "lucide-react"
import Image from "next/image"
import { Input } from "./ui/input"
import Link from "next/link"

const collections = [
  {
    title: "Wedding Sarees",
    slug: "wedding-sarees",
    description: "Exquisite bridal collection",
    image: "bridal-saree.jpeg",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Party Wear",
    slug: "party-wear-saree",
    description: "Glamorous evening sarees",
    image: "party-wear.jpeg",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Cotton Sarees",
    slug:"cotton-saree",
    description: "Comfortable daily wear",
    image: "cotton-saree.jpeg",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Office Wear",
    slug:"office-wear-saree",
    description: "Professional elegance",
    image: "office-wear.jpeg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "New Arrivals",
    slug:"new-arrivals",
    description: "Latest trending styles",
    image: "new-arrival.jpeg",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Bestsellers",
    slug:"bestsellers",
    description: "Customer favorites",
    image: "best-seller.jpeg",
    color: "from-rose-500 to-pink-500",
  },
]

export default function CuratedCollections() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-2">
            Curated Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-lora text-lg mb-4">
            Discover our handpicked collections designed for every occasion and style preference
          </p>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-rose-500 transition-colors duration-200" />
              <Input
                placeholder="Search for sarees, fabrics, colors..."
                className="pl-10 border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-200 font-poppins bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <Link href={`/collections/${collection.slug}`} key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-20 group-hover:opacity-30 transition-opacity z-10`}
                />
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  width={250}
                  height={300}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="font-semibold text-sm md:text-base mb-1 font-cormorant">
                    {collection.title}
                  </h3>
                  <p className="text-xs opacity-90 font-quicksand">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
