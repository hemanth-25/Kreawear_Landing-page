import React, { useState, useEffect, useRef } from 'react';
import { Shirt, Upload, Users, Calendar, Star, Phone, Mail, MapPin, ShoppingCart, User, Home, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselImages = [
    "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, carouselImages.length]);

  // Smooth scroll to current slide
  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = currentSlide * 300; // 300px per image
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo with Semi-circular Static Border */}
            <div className="relative">
              <div className="logo-container relative flex items-center space-x-3 px-6 py-3">
                <Shirt className="h-8 w-8 text-orange-500 z-10" />
                <div className="z-10">
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight">KreaWear</h1>
                  <div className="text-xs text-gray-500 font-mono leading-none">
                    <div>────────</div>
                    <div className="mt-0.5">Create. Customize. Wear.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Navigation */}
            <nav className="floating-nav hidden md:flex">
              <a href="#home" className="nav-item flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </a>
              <a href="#men" className="nav-item text-gray-700 hover:text-orange-500 transition-colors">Men</a>
              <a href="#women" className="nav-item text-gray-700 hover:text-orange-500 transition-colors">Women</a>
            </nav>

            {/* Cart and Profile */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
              <button className="p-2 text-gray-700 hover:text-orange-500 transition-colors">
                <User className="h-6 w-6" />
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                Start Design
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Create Your Custom Shirts/T-Shirts */}
      <section className="custom-shirt-section w-full h-[500px] bg-[#343434] relative overflow-hidden">
        <div className="flex h-full">
          {/* Left Side - Text Content (40%) */}
          <div className="w-2/5 flex flex-col justify-center px-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Create Your Custom Shirts & T-Shirts
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your ideas into wearable art. Upload your design, choose your style, and let us bring your vision to life with premium quality shirts and t-shirts.
            </p>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 w-fit shadow-lg">
              Shop Now
            </button>
          </div>

          {/* Right Side - Image Carousel (60%) */}
          <div className="w-3/5 relative flex items-center">
            <div 
              className="carousel-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                ref={carouselRef}
                className="carousel-track flex overflow-x-hidden"
              >
                {carouselImages.map((image, index) => (
                  <div key={index} className="carousel-slide flex-shrink-0">
                    <img 
                      src={image} 
                      alt={`Custom shirt ${index + 1}`}
                      className="carousel-image"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Full-Height Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="carousel-arrow-fullheight carousel-arrow-left-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button 
              onClick={nextSlide}
              className="carousel-arrow-fullheight carousel-arrow-right-full"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mobile-layout hidden">
          <div className="text-center px-6 py-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Create Your Custom Shirts & T-Shirts</h2>
            <p className="text-lg text-gray-300 mb-6">Transform your ideas into wearable art.</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all">
              Shop Now
            </button>
          </div>
          <div className="carousel-container-mobile">
            <div className="carousel-track flex overflow-x-hidden">
              {carouselImages.map((image, index) => (
                <div key={index} className="carousel-slide-mobile flex-shrink-0">
                  <img 
                    src={image} 
                    alt={`Custom shirt ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Product Sections */}
      
      {/* Polo T-Shirts Section */}
      <section className="product-section w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Polo T-Shirts</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Elevate your style with our premium polo t-shirts. Perfect blend of comfort and sophistication for any occasion.
              </p>
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                Customize Now
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="product-image-container">
                <img 
                  src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Polo T-Shirt" 
                  className="product-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plain T-Shirts Section */}
      <section className="product-section w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="product-image-container">
                <img 
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Plain T-Shirt" 
                  className="product-image"
                />
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Plain T-Shirts</h3>
              <h4 className="text-2xl text-orange-500 font-semibold mb-6">Timeless Comfort</h4>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the beauty of simplicity. Our plain t-shirts offer versatility and comfort that never goes out of style.
              </p>
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                Customize Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hoodies Section */}
      <section className="product-section w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Hoodies</h3>
              <h4 className="text-2xl text-orange-500 font-semibold mb-6">Stay Cozy in Style</h4>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Embrace warmth and style with our premium hoodies. Perfect for layering and making a statement wherever you go.
              </p>
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                Customize Now
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="product-image-container">
                <img 
                  src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Hoodie" 
                  className="product-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Categories - Circular Design */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">Shop Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="circular-category bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform group-hover:scale-105">
                <Users className="h-16 w-16 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Men</h4>
                <p className="text-gray-600 text-sm">Custom designs for men's shirts</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="circular-category bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition-all duration-300 transform group-hover:scale-105">
                <Users className="h-16 w-16 text-pink-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Women</h4>
                <p className="text-gray-600 text-sm">Stylish shirts designed for women</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="circular-category bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 transform group-hover:scale-105">
                <Upload className="h-16 w-16 text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Custom Prints</h4>
                <p className="text-gray-600 text-sm">Upload your favorite photos</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="circular-category bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform group-hover:scale-105">
                <Calendar className="h-16 w-16 text-purple-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Signature Days</h4>
                <p className="text-gray-600 text-sm">Special occasion designs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section 
        className="relative py-20 bg-gray-50"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Semi-transparent overlay with blur effect */}
        <div 
          className="absolute inset-0 bg-gray-50/85"
          style={{
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)'
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">Choose Your Style</h4>
              <p className="text-gray-700 leading-relaxed">Select from our range of men's and women's shirts in various sizes and colors</p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">Upload Your Design</h4>
              <p className="text-gray-700 leading-relaxed">Upload your photo or choose from our signature day designs</p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">Preview & Order</h4>
              <p className="text-gray-700 leading-relaxed">Review your design and place your order with confidence</p>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">We Print & Deliver</h4>
              <p className="text-gray-700 leading-relaxed">We'll print and ship your custom shirt right to your door</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Custom t-shirt" 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Bestseller
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-gray-900">Custom Photo T-Shirt</h4>
                <p className="text-gray-600 mb-4">Upload your favorite memory</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-500">₹999</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.8 (124)</span>
                  </div>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Men's custom shirt" 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-gray-900">Men's Premium Shirt</h4>
                <p className="text-gray-600 mb-4">Premium quality cotton blend</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-500">₹1,299</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.9 (89)</span>
                  </div>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Women's custom shirt" 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-gray-900">Women's Elegant Shirt</h4>
                <p className="text-gray-600 mb-4">Soft fabric, perfect fit</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-500">₹1,149</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.7 (156)</span>
                  </div>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">Get In Touch</h3>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <Phone className="h-12 w-12 text-orange-500 mx-auto mb-6" />
              <h4 className="font-bold text-xl mb-4 text-gray-900">Call Us</h4>
              <p className="text-gray-600 text-lg">+91 98765 43210</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <Mail className="h-12 w-12 text-orange-500 mx-auto mb-6" />
              <h4 className="font-bold text-xl mb-4 text-gray-900">Email Us</h4>
              <p className="text-gray-600 text-lg">hello@kreawear.com</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-6" />
              <h4 className="font-bold text-xl mb-4 text-gray-900">Visit Us</h4>
              <p className="text-gray-600 text-lg">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Footer Logo with Animated Neon Border Box */}
            <div className="footer-neon-box mb-6 md:mb-0">
              <div className="flex items-center space-x-3 px-6 py-4">
                <Shirt className="h-8 w-8 text-orange-500" />
                <div>
                  <span className="text-2xl font-bold">KreaWear</span>
                  <div className="text-sm text-gray-400 font-mono leading-none">
                    <div>────────</div>
                    <div className="mt-1">Create. Customize. Wear.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Shipping Info</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Returns</a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 KreaWear. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;