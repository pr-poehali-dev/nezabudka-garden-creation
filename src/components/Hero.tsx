import React from "react";
import { Button } from "@/components/ui/button";
import Butterfly from "./Butterfly";

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 bg-nezabudka-light overflow-hidden">
      <div className="absolute right-4 top-12">
        <Butterfly size="lg" className="opacity-60" />
      </div>
      <div className="absolute left-8 bottom-16">
        <Butterfly size="md" className="opacity-40" />
      </div>
      <div className="absolute left-1/4 top-1/4">
        <Butterfly size="sm" className="opacity-30" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-nezabudka-dark mb-4">
            Детский сад <span className="text-nezabudka-accent">"Незабудка"</span>
          </h1>
          <p className="text-lg md:text-xl text-nezabudka-dark/80 mb-8">
            Место, где ваш ребенок растет, развивается и познает мир в атмосфере заботы, 
            любви и внимания. Мы создаем пространство для счастливого детства!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-nezabudka hover:bg-nezabudka-dark text-white">
              Записаться на экскурсию
            </Button>
            <Button variant="outline" className="text-nezabudka border-nezabudka hover:bg-nezabudka/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
