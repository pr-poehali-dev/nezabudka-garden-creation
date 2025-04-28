import React from "react";
import { Link } from "react-router-dom";
import Butterfly from "./Butterfly";

const Footer: React.FC = () => {
  return (
    <footer className="bg-nezabudka-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Butterfly color="#9b87f5" />
              <span className="text-xl font-bold">Незабудка</span>
            </div>
            <p className="text-sm text-white/70">
              Детский сад, где каждый ребенок найдет друзей и раскроет свои таланты
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-white/70">
              <li>г. Москва, ул. Цветочная, 12</li>
              <li>Тел: +7 (123) 456-78-90</li>
              <li>Email: info@nezabudka.ru</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Меню</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Услуги</Link></li>
              <li><Link to="/contacts" className="text-white/70 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
            <ul className="space-y-2 text-white/70">
              <li>Пн-Пт: 7:00 - 19:00</li>
              <li>Сб-Вс: Выходной</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-white/10 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Детский сад "Незабудка". Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
