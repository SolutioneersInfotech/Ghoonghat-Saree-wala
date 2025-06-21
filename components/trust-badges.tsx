import { Shield, Truck, RotateCcw, CreditCard, Award, Headphones } from "lucide-react"

const trustBadges = [
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Genuine products only",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹999",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "7-day return policy",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Safe & encrypted",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Premium materials",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here to help",
  },
]

export default function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-rose-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Ghoonghat Saree Wala?</h2>
          <p className="text-gray-600">Your trust is our priority</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustBadges.map((badge, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-rose-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <badge.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
