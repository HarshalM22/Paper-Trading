import { useState } from 'react';
import { Search, Bell, BarChart3 } from 'lucide-react';

const NavItem = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 text-md font-medium transition-colors duration-200 ${
      isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
    }`}
  >
    {label}
  </button>
);

const SubNavItem = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
      isActive
        ? 'text-indigo-600 border-indigo-600'
        : 'text-gray-500 border-transparent hover:text-gray-900'
    }`}
  >
    {label}
  </button>
);


export function TradingHeader() {
  const [activeNav, setActiveNav] = useState('Stocks');
  const [activeSubNav, setActiveSubNav] = useState('Explore');

  const navItems = ['Stocks', 'F&O', 'Mutual Funds'];
  const subNavItems = ['Explore', 'Holdings', 'Positions', 'Orders', 'Watchlist'];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-30">
      {/* Main Header Section */}
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Section: Logo and Main Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400" />
            
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <NavItem
                  key={item}
                  label={item}
                  isActive={activeNav === item}
                  onClick={() => setActiveNav(item)}
                />
              ))}
            </nav>
          </div>

          {/* Center Section: Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search Groww..."
                className="w-full bg-gray-100/70 border border-gray-200 rounded-lg py-2 pl-10 pr-20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <kbd className="inline-flex items-center px-2 py-1 text-xs font-sans font-medium text-gray-400 bg-gray-200/80 border border-gray-300 rounded">
                  Ctrl+K
                </kbd>
              </div>
            </div>
          </div>

          {/* Right Section: Actions and User Profile */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <BarChart3 size={16} />
              Terminal
            </button>
            <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100">
              915.trade ?
            </button>
            <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700">
              <Bell size={22} />
            </button>
            <div className="w-9 h-9 flex items-center justify-center bg-gray-800 text-white font-bold rounded-full cursor-pointer">
              D
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary Navigation Section */}
      <div className="border-t border-gray-200">
        <nav className="mx-auto max-w-screen-2xl px-6 flex items-center gap-4">
          {subNavItems.map((item) => (
            <SubNavItem
              key={item}
              label={item}
              isActive={activeSubNav === item}
              onClick={() => setActiveSubNav(item)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}