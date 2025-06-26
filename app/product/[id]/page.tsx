import Header from "@/components/header"
import ProductImageGallery from "@/components/product-image-gallery"
import ProductDetails from "@/components/product-details"
import ProductReviews from "@/components/product-reviews"
import RelatedProducts from "@/components/related-products"
import Footer from "@/components/footer"
import MobileNavigation from "@/components/mobile-navigation"
import WhatsAppChat from "@/components/whatsapp-chat"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* <Header /> */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <ProductImageGallery />
          <ProductDetails />
        </div>
        <ProductReviews />
        <RelatedProducts />
      </main>
      <Footer />
      <MobileNavigation />
      <WhatsAppChat />
    </div>
  )
}
