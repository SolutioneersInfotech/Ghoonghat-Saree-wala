"use client";

import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import FestiveOffersBanner from "@/components/festive-offers-banner";
import CuratedCollections from "@/components/curated-collections";
import BestSellingSarees from "@/components/best-selling-sarees";
import ShopByFilters from "@/components/shop-by-filters";
import SocialFeed from "@/components/social-feed";
import Testimonials from "@/components/testimonials";
import TrustBadges from "@/components/trust-badges";
import Footer from "@/components/footer";
import MobileNavigation from "@/components/mobile-navigation";
import WhatsAppChat from "@/components/whatsapp-chat";
import FirstPurchasePopup from "@/components/first-purchase-popup";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
}

export default function HomePage() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header onAccountClick={() => setIsAccountOpen(true)} />
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
     {isAccountOpen && (
  <>
    {/* Backdrop */}
    <div
      className="fixed inset-0 bg-black/50 z-40"
      onClick={() => setIsAccountOpen(false)}
    />

    {/* Sidebar */}
    <div className="fixed top-0 right-0 w-full sm:w-[400px] h-screen bg-white z-50 shadow-xl p-6 animate-slide-in overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">{isLogin ? "Login" : "Register"}</h2>
        <button
          className="text-2xl font-bold"
          onClick={() => setIsAccountOpen(false)}
        >
          ×
        </button>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (isLogin) {
            console.log("Logging in...");
          } else {
            console.log("Registering...");
          }
        }}
      >
        {isLogin ? (
          <>
            {/* Login Form */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full border p-2 rounded"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full border p-2 rounded"
                required
              />
            </label>
          </>
        ) : (
          <>
            {/* Register Form */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">First Name</span>
              <input
                type="text"
                placeholder="First Name"
                className="mt-1 w-full border p-2 rounded"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Last Name</span>
              <input
                type="text"
                placeholder="Last Name"
                className="mt-1 w-full border p-2 rounded"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full border p-2 rounded"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Password</span>
              <input
                type="password"
                placeholder="Create a password"
                className="mt-1 w-full border p-2 rounded"
                required
              />
            </label>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-rose-500  hover:bg-pink-600 text-white py-2 rounded"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p className="mt-4 text-sm text-center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          className="text-blue-600 cursor-pointer font-medium"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Register here" : "Login here"}
        </span>
      </p>
    </div>
  </>
)}

    </div>
  );
}
