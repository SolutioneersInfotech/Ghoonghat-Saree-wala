"use client"

import { useState, useEffect } from "react"
import { X, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FirstPurchasePopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative animate-in slide-in-from-bottom-4">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to ghoonght Saree Wala!</h3>

          <p className="text-gray-600 mb-4">
            Get 15% off on your first purchase. Enter your email to claim your discount!
          </p>

          <div className="space-y-4">
            <Input type="email" placeholder="Enter your email" className="border-rose-200 focus:border-rose-400" />
            <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600">
              Claim 15% Discount
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-4">*Valid for first-time customers only. Terms apply.</p>
        </div>
      </div>
    </div>
  )
}
