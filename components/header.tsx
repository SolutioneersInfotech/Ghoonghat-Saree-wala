"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingBag, User, Menu, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";

interface HeaderProps {
  onAccountClick: () => void;
}

export default function Header({ onAccountClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAccountSidebarOpen, setIsAccountSidebarOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md shadow-lg border-b border-rose-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Main header */}
        <div className="flex items-center justify-between py-4 relative">
          {/* Left: Menu & Search */}
          <div className="flex items-center flex-1 animate-fade-in-up">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden mr-2 hover:bg-rose-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* <Menu className="h-5 w-5" /> */}
            </Button>
            <SearchBar />
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <img
              src="/log.png"
              alt="Ghoonghat Saree Wala Logo"
              onClick={() => router.push("/")}
              className="h-10 md:h-14 hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>

          {/* Right: Action buttons */}
          <div className="flex items-center space-x-2 md:space-x-4 animate-fade-in-up animation-delay-400 flex-1 justify-end">
            <Button
              variant="ghost"
              size="sm"
              className={`hidden md:flex hover:bg-rose-50 ${
                isScrolled ? "text-black" : "text-white"
              } hover:text-rose-600 transition-all duration-200 font-poppins group`}
              onClick={() => router.push("/wishlist")}
            >
              <Heart className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden lg:inline">Wishlist</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`relative hover:bg-rose-50 ${
                isScrolled ? "text-black" : "text-white"
              } hover:text-rose-600 transition-all duration-200 font-poppins group`}
              onClick={() => router.push("/cart")}
            >
              <ShoppingBag className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden md:inline">Cart</span>
              {/* <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                2
              </span> */}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`hover:bg-rose-50 ${
                isScrolled ? "text-black" : "text-white"
              } hover:text-rose-600 transition-all duration-200 font-poppins group`}
              onClick={onAccountClick}
            >
              <User className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden md:inline">Account</span>
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        {/* <div className="md:hidden pb-4 animate-fade-in-up animation-delay-300">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-rose-500 transition-colors duration-200" />
            <Input
              placeholder="Search sarees..."
              className="pl-10 border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-200 font-poppins bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div> */}

        {/* Navigation menu */}
        <nav
          className={`hidden md:block border-t border-rose-50 py-3 transition-all duration-300 ${
            isScrolled ? "opacity-0 h-0 py-0 overflow-hidden" : "opacity-100"
          }`}
        >
          <div className="flex justify-center">
            <div
              className={`flex space-x-8 text-sm font-bold font-poppins transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {[
                { name: "New Arrivals", active: true },
                { name: "Wedding Sarees", active: false },
                { name: "Party Wear", active: false },
                { name: "Cotton Sarees", active: false },
                { name: "Office Wear", active: false },
                { name: "Bestsellers", active: false },
                { name: "Sale", active: false },
              ].map((item, index) => (
                <a
                  key={item.name}
                  href="#"
                  className={`relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 ${
                    item.active ? "text-rose-600" : "hover:text-rose-600"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-80 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-playfair font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Menu
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="space-y-4">
              {[
                "New Arrivals",
                "Wedding Sarees",
                "Party Wear",
                "Cotton Sarees",
                "Office Wear",
                "Bestsellers",
                "Sale",
              ].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="block py-3 px-4 rounded-lg text-yellow-700 hover:bg-rose-50 hover:text-rose-600 transition-all duration-200 font-poppins animate-slide-in-right"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
