
import React from "react";
import { Link } from "react-router-dom";
import Butterfly from "./Butterfly";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-nezabudka-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Butterfly size="sm" color="#9b87f5" />
              <span className="text-xl font-bold">Незабудка</span>
            </div>
            <p className="text-nezabudka-light/80 max-w-md mb-6">
              Детский сад "Незабудка" - место, где каждый ребенок найдет заботу, 
              понимание и возможности для гармоничного развития.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-nezabudka-light hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-nezabudka-light hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-nezabudka-light hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Запись на экскурсию</h3>
            <p className="text-nezabudka-light/80 mb-4">
              Оставьте свои контакты, и мы свяжемся с вами для записи на экскурсию по детскому саду
            </p>
            <div className="flex gap-2 mb-4">
              <Input 
                type="text" 
                placeholder="Ваше имя" 
                className="bg-nezabudka-dark/50 border-nezabudka text-white placeholder:text-nezabudka-light/50"
              />
              <Input 
                type="tel" 
                placeholder="Телефон" 
                className="bg-nezabudka-dark/50 border-nezabudka text-white placeholder:text-nezabudka-light/50"
              />
            </div>
            <Button className="w-full bg-nezabudka hover:bg-nezabudka-accent">
              Записаться
            </Button>
          </div>
        </div>
        
        <div className="border-t border-nezabudka pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-nezabudka-light/70 text-sm">
            © 2025 Детский сад "Незабудка". Все права защищены.
          </div>
          <div className="flex gap-6">
            <Link to="/" className="text-nezabudka-light hover:text-white transition-colors text-sm">
              Главная
            </Link>
            <Link to="/about" className="text-nezabudka-light hover:text-white transition-colors text-sm">
              О нас
            </Link>
            <Link to="/services" className="text-nezabudka-light hover:text-white transition-colors text-sm">
              Услуги
            </Link>
            <Link to="/contacts" className="text-nezabudka-light hover:text-white transition-colors text-sm">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
