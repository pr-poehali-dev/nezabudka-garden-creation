import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Butterfly from "./Butterfly";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Butterfly size="md" color="#6E59A5" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-nezabudka-dark">Незабудка</span>
              <span className="text-sm text-nezabudka">Детский сад</span>
            </div>
          </Link>
          
          <div className="hidden md:block relative">
            <div className="leaves-menu px-8 py-3 rounded-full relative">
              {/* Левая бабочка */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2">
                <Butterfly size="md" color="#6E59A5" className="butterfly-hover-left" />
              </div>
              
              {/* Правая бабочка */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2">
                <Butterfly size="md" color="#6E59A5" className="butterfly-hover-right" />
              </div>
              
              {/* Навигационное меню в виде листвы */}
              <NavigationMenu>
                <NavigationMenuList className="flex gap-6">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/" 
                        className="leaf-item text-white hover:text-nezabudka-light transition-colors"
                      >
                        Главная
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/about" 
                        className="leaf-item text-white hover:text-nezabudka-light transition-colors"
                      >
                        О нас
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/services" 
                        className="leaf-item text-white hover:text-nezabudka-light transition-colors"
                      >
                        Услуги
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/contacts" 
                        className="leaf-item text-white hover:text-nezabudka-light transition-colors"
                      >
                        Контакты
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="p-2 text-nezabudka-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
