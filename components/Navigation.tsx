
import React, { useState, useEffect } from 'react';
import { Menu, X, Church, Lock } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  churchName: string;
  location: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage, churchName, location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  // Hidden way to access admin: Click logo 5 times within 3 seconds
  useEffect(() => {
    if (logoClicks === 5) {
      handleNavClick('admin-portal');
      setLogoClicks(0);
    }
    const timer = setTimeout(() => setLogoClicks(0), 3000);
    return () => clearTimeout(timer);
  }, [logoClicks]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'branches', label: 'Branches' },
    { id: 'ministries', label: 'Ministries' },
    { id: 'bible-training', label: 'Bible School' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
  };

  const handleLogoTouch = () => {
    setLogoClicks(prev => prev + 1);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div 
            className="flex items-center cursor-pointer group select-none active:scale-95 transition-transform" 
            onClick={handleLogoTouch}
          >
            <div className="bg-nepal-blue text-white p-2 rounded-xl mr-3 group-hover:bg-nepal-red transition-colors">
              <Church className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base md:text-xl text-slate-900 leading-none truncate max-w-[140px] md:max-w-none">{churchName}</span>
              <span className="text-[10px] text-slate-400 font-medium tracking-tight uppercase truncate max-w-[140px] md:max-w-none mt-1">{location}</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[11px] xl:text-xs font-black transition-all duration-200 uppercase tracking-widest relative group ${
                  currentPage === item.id ? 'text-nepal-blue' : 'text-slate-500 hover:text-nepal-blue'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-nepal-blue transition-all duration-300 ${currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}

            <button
               onClick={() => handleNavClick('contact')}
               className="bg-nepal-blue text-white px-6 py-3 rounded-xl text-[11px] font-black hover:bg-nepal-red transition-all shadow-lg active:scale-95 uppercase tracking-widest"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 bg-slate-100 rounded-xl"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 animate-fade-in max-h-[90vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-5 py-4 rounded-2xl text-sm font-black uppercase tracking-widest ${
                  currentPage === item.id ? 'bg-blue-50 text-nepal-blue' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
               onClick={() => handleNavClick('contact')}
               className="block w-full text-left px-5 py-4 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-600"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
