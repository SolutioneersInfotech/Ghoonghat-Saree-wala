"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[90vh] md:h-[95vh] overflow-hidden bg-gradient-to-br from-rose-900 via-purple-900 to-indigo-900 ">
      {/* Animated background overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 via-purple-900/70 to-transparent z-10" /> */}

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden z-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-float animation-delay-0"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-blue-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-float animation-delay-1500"></div>
      </div>

      {/* Background image */}
      {/* <Image
        src="/placeholder.svg?height=800&width=1200"
        alt="Elegant woman in traditional saree"
        fill
        className="object-cover"
        priority
      /> */}

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
  poster="/poster.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center mt-28 pb-28">
        <div className="max-w-2xl text-white">
          {/* Animated badge */}

          {/* Main heading */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 leading-tight transition-all duration-1000 animation-delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Discover
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Timeless
            </span>
            <span className="block font-dm-serif italic">Elegance</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl lg:text-2xl mb-8 text-rose-100 font-lora leading-relaxed transition-all duration-1000 animation-delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Sarees for Every Occasion - From Traditional Ceremonies to
            Contemporary Celebrations
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 animation-delay-900 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-full text-lg font-poppins shadow-2xl hover:shadow-rose-500/25 transition-all duration-300 hover:scale-105"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>

            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Sparkles className="h-4 w-4 mr-2 text-yellow-400 animate-pulse" />
              <span className="text-sm font-quicksand font-medium">
                Premium Collection 2025
              </span>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`flex items-center space-x-8 mt-12 transition-all duration-1000 animation-delay-1200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-playfair text-yellow-400">
                10K+
              </div>
              <div className="text-sm font-quicksand text-rose-200">
                Happy Customers
              </div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-playfair text-yellow-400">
                500+
              </div>
              <div className="text-sm font-quicksand text-rose-200">
                Unique Designs
              </div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-playfair text-yellow-400">
                4.9★
              </div>
              <div className="text-sm font-quicksand text-rose-200">
                Customer Rating
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
