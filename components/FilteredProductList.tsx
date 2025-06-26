"use client"

import { useState } from "react"
import Image from "next/image"

export default function FilteredProductList({ products }: { products: any[] }) {
  const [fabricFilter, setFabricFilter] = useState<string[]>([])
  const [maxPrice, setMaxPrice] = useState<number>(10000)

  const handleFabricChange = (value: string) => {
    setFabricFilter((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    )
  }

  const filteredProducts = products.filter((product) => {
    const price = product.variants?.[0]?.prices?.[0]?.amount || 0
    const fabric = product.metadata?.fabric?.toLowerCase() ?? ""

    return (
      price <= maxPrice * 100 &&
      (fabricFilter.length === 0 || fabricFilter.includes(fabric))
    )
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar */}
      <aside className="md:col-span-1">
        <div className="bg-white rounded-xl shadow p-4 space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Fabric</h4>
            {["cotton", "silk", "georgette", "linen"].map((fabric) => (
              <label
                key={fabric}
                className="flex items-center space-x-2 text-sm capitalize"
              >
                <input
                  type="checkbox"
                  value={fabric}
                  onChange={() => handleFabricChange(fabric)}
                  checked={fabricFilter.includes(fabric)}
                  className="accent-rose-500"
                />
                <span>{fabric}</span>
              </label>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-2">Max Price (₹)</h4>
            <input
              type="range"
              min={500}
              max={10000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-sm mt-1">Up to ₹{maxPrice}</p>
          </div>
        </div>
      </aside>

      {/* Products */}
      <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 col-span-full">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={product.thumbnail || "/placeholder.svg"}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-base font-semibold line-clamp-2">
                  {product.title}
                </h2>
                <p className="text-xs text-gray-500">{product.subtitle}</p>
                <p className="text-lg font-bold text-rose-600 mt-2">
                  ₹{(product.variants[0]?.prices?.[0]?.amount ?? 0) / 100}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
