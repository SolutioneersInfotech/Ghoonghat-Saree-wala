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
                <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.thumbnail || "/placeholder.svg"}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    {/* Optional: Discount Badge */}
                    {product.metadata?.discount && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                        {product.metadata.discount}% OFF
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex flex-col justify-between h-44">
                    <div>
                      <h2 className="text-base font-semibold line-clamp-2 mb-1">{product.title}</h2>
                      <p className="text-xs text-gray-500 line-clamp-2">{product.subtitle}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-lg font-bold text-rose-600">₹{priceDisplay}</p>
                      <button className="mt-2 w-full bg-rose-600 text-white py-2 rounded hover:bg-rose-700 transition">
                        Add to Cart
                      </button>
                    </div>
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
