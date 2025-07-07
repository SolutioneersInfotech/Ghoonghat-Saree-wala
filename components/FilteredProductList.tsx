"use client"

import { useState } from "react"
import Image from "next/image"

export default function FilteredProductList({ products }: { products: any[] }) {
  const [fabricFilter, setFabricFilter] = useState<string[]>([])
  const [maxPrice, setMaxPrice] = useState<number>(10000)

  const handleFabricChange = (value: string) => {
    setFabricFilter(prev =>
      prev.includes(value) ? prev.filter(f => f !== value) : [...prev, value]
    )
  }

  const filtered = products.filter(product => {
    const price = product.variants?.[0]?.prices?.[0]?.amount ?? 0
    const fabric = product.metadata?.fabric?.toLowerCase() ?? ""
    return price <= maxPrice * 100 && (fabricFilter.length === 0 || fabricFilter.includes(fabric))
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="md:w-1/4 w-full bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          <div className="mb-6">
            <h4 className="font-medium mb-2">Fabric</h4>
            {["cotton", "silk", "georgette", "linen"].map(fab => (
              <label key={fab} className="flex items-center mb-2 space-x-2">
                <input
                  type="checkbox"
                  value={fab}
                  onChange={() => handleFabricChange(fab)}
                  checked={fabricFilter.includes(fab)}
                  className="accent-rose-500 form-checkbox h-4 w-4"
                />
                <span className="capitalize text-sm">{fab}</span>
              </label>
            ))}
          </div>

          <div>
            <h4 className="font-medium mb-2">Max Price ₹{maxPrice}</h4>
            <input
              type="range"
              min={500}
              max={10000}
              step={100}
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="w-full accent-rose-500"
            />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="md:w-3/4 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.length === 0 ? (
            <p className="text-gray-500 col-span-full">No products found.</p>
          ) : (
            filtered.map(product => {
              const price = product.variants?.[0]?.prices?.[0]?.amount ?? 0
              const priceDisplay = (price / 100).toLocaleString("en-IN")
              return (
                <div
  key={product.id}
  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-2 flex flex-col"
>
  {/* Image Section */}
  <div className="relative rounded-xl overflow-hidden">
    <Image
      src={product.thumbnail || "/placeholder.svg"}
      alt={product.title}
      width={300}
      height={300}
      className="w-full h-56 object-cover rounded-xl"
    />
    {product.metadata?.badge && (
      <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
        {product.metadata.badge}
      </span>
    )}
  </div>

  {/* Info Section */}
  <div className="p-3">
    <h3 className="text-sm font-bold">{product.title}</h3>
    <p className="text-xs text-gray-600">{product.subtitle}</p>
    <p className="text-xs text-gray-500 line-clamp-2 mt-1">
      {product.metadata?.description || "Explore timeless elegance with our premium sarees made with traditional fabrics and fine craftsmanship."}
    </p>
  </div>

  {/* Price + Action */}
  <div className="flex items-center justify-between px-3 pb-3 mt-auto">
    <span className="font-bold text-black text-base">
      ₹{(product.variants?.[0]?.prices?.[0]?.amount ?? 0) / 100}
    </span>
    <button className="text-white bg-yellow-600 text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
      Buy Now →
    </button>
  </div>
</div>

              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
