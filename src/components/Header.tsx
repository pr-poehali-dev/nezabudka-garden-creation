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
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/" 
                    className="px-3 py-2 text-nezabudka-dark hover:text-nezabudka-accent transition-colors"
                  >
                    Главная
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/about" 
                    className="px-3 py-2 text-nezabudka-dark hover:text-nezabudka-accent transition-colors"
                  >
                    О нас
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/services" 
                    className="px-3 py-2 text-nezabudka-dark hover:text-nezabudka-accent transition-colors"
                  >
                    Услуги
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/contacts" 
                    className="px-3 py-2 text-nezabudka-dark hover:text-nezabudka-accent transition-colors"
                  >
                    Контакты
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
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
