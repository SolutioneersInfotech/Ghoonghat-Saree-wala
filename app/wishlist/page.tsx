"use client"

import Header from "@/components/header";
import Image from "next/image"

export default function WishlistPage() {
    const wishlistItems = [
  {
    id: "p1",
    title: "Floral Printed Cotton Kurti",
    subtitle: "Lightweight daily wear",
    thumbnail: "/images/floral-kurti.jpg",
    variants: [{ prices: [{ amount: 129900 }] }],
    metadata: {
      fabric: "cotton",
      discount: 20,
    },
  },
  {
    id: "p2",
    title: "Elegant Silk Saree",
    subtitle: "Perfect for weddings and occasions",
    thumbnail: "/images/silk-saree.jpg",
    variants: [{ prices: [{ amount: 259900 }] }],
    metadata: {
      fabric: "silk",
      discount: 30,
    },
  },
  {
    id: "p3",
    title: "Georgette Anarkali Dress",
    subtitle: "Flowy and fashionable",
    thumbnail: "/images/georgette-anarkali.jpg",
    variants: [{ prices: [{ amount: 189900 }] }],
    metadata: {
      fabric: "georgette",
    },
  },
  {
    id: "p4",
    title: "Linen Straight Kurta Set",
    subtitle: "Breathable summer wear",
    thumbnail: "/images/linen-kurta.jpg",
    variants: [{ prices: [{ amount: 109900 }] }],
    metadata: {
      fabric: "linen",
      discount: 10,
    },
  },
  {
    id: "p5",
    title: "Designer Embroidered Gown",
    subtitle: "Premium party wear gown",
    thumbnail: "/images/designer-gown.jpg",
    variants: [{ prices: [{ amount: 349900 }] }],
    metadata: {
      fabric: "silk",
    },
  },
  {
    id: "p6",
    title: "Casual Cotton Palazzo Set",
    subtitle: "Stylish & comfortable",
    thumbnail: "/images/palazzo-set.jpg",
    variants: [{ prices: [{ amount: 99900 }] }],
    metadata: {
      fabric: "cotton",
      discount: 15,
    },
  },
];

  return (
    <>
    <div className="h-32 bg-rose-600">
    <Header/>
    </div>
    
   
    <div className="container mx-auto px-4 pt-28 pb-8">
      
      <h1 className="text-2xl font-bold mb-6"> My Wishlist</h1>

      {wishlistItems?.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems?.map(item => {
            const price = item.variants?.[0]?.prices?.[0]?.amount ?? 0
            const priceDisplay = (price / 100).toLocaleString("en-IN")

            return (
              <div key={item.id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {item.metadata?.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                      {item.metadata.discount}% OFF
                    </span>
                  )}
                </div>

                <div className="p-4 flex flex-col justify-between h-44">
                  <div>
                    <h2 className="text-base font-semibold line-clamp-2 mb-1">{item.title}</h2>
                    <p className="text-xs text-gray-500 line-clamp-2">{item.subtitle}</p>
                  </div>

                  <div className="mt-4 flex flex-col gap-2">
                    <p className="text-lg font-bold text-rose-600">₹{priceDisplay}</p>
                    <div className="flex gap-2">
                      <button className="flex-1   bg-rose-500  hover:bg-pink-600 py-2 rounded transition">
                        Add to Cart
                      </button>
                      <button className="flex-1  border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-100 transition">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
     </>
  )
}
