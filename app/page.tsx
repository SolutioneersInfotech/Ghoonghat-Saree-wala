'use client';

import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import FestiveOffersBanner from "@/components/festive-offers-banner"
import CuratedCollections from "@/components/curated-collections"
import BestSellingSarees from "@/components/best-selling-sarees"
import ShopByFilters from "@/components/shop-by-filters"
import SocialFeed from "@/components/social-feed"
import Testimonials from "@/components/testimonials"
import TrustBadges from "@/components/trust-badges"
import Footer from "@/components/footer"
import MobileNavigation from "@/components/mobile-navigation"
import WhatsAppChat from "@/components/whatsapp-chat"
import FirstPurchasePopup from "@/components/first-purchase-popup"

interface Product {
  id: string;
  title: string;
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      <main>
        <HeroBanner />
        <FestiveOffersBanner />
        <CuratedCollections />
        <BestSellingSarees />
        <ShopByFilters />
        <SocialFeed />
        <Testimonials />
        <TrustBadges />
      </main>
      <Footer />
      <MobileNavigation />
      <WhatsAppChat />
      <FirstPurchasePopup />
    </div>
  )
}
