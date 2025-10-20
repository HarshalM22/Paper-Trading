import { Button } from "./ui/button";

export default function Header() {
  return (
    
        <header className="bg-[#f5f5f5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-serif font-bold  text-black">TradeZero</h1>

        {/* Navigation */}
        <nav className="space-x-8  font-serif text-black">
          <a href="" className="hover:text-gray-600 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Pricing
          </a>
          <a href="/signin" className="hover:text-gray-600 transition-colors">
            Sign In
          </a>
          <a href="/signup">
          <Button >Get Started</Button>
          </a>
        </nav>
      </div>
    </header>
      
  )
}
