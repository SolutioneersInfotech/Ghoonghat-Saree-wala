"use client"

import { Home, Grid3X3, ShoppingBag, User, Heart } from "lucide-react"
import { useState } from "react"

export default function MobileNavigation() {
  const [activeTab, setActiveTab] = useState("home")

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "categories", icon: Grid3X3, label: "Categories" },
    { id: "cart", icon: ShoppingBag, label: "Cart", badge: 2 },
    { id: "wishlist", icon: Heart, label: "Wishlist" },
    { id: "account", icon: User, label: "Account" },
  ]

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center py-2 px-3 relative ${
              activeTab === item.id ? "text-rose-500" : "text-gray-500"
            }`}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{item.label}</span>
            {item.badge && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
