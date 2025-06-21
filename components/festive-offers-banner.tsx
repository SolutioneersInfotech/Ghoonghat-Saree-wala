import { Button } from "@/components/ui/button"
import { Sparkles, Clock } from "lucide-react"

export default function FestiveOffersBanner() {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="flex items-center mb-3 md:mb-0">
            <Sparkles className="h-6 w-6 mr-2 animate-pulse" />
            <div>
              <h3 className="text-lg md:text-xl font-bold">Wedding Season Special - Flat 20% Off!</h3>
              <p className="text-sm opacity-90">On all Wedding & Party Wear Sarees</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>Ends in 2 days</span>
            </div>
            <Button variant="secondary" size="sm" className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
