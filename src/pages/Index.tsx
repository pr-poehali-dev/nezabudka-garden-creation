import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Butterfly from "@/components/Butterfly";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Галерея */}
        <section className="py-16 bg-nezabudka-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-nezabudka-dark mb-12">
              Наша <span className="text-nezabudka">галерея</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-sm">
                  <img 
                    src={`https://source.unsplash.com/random/400x400?kindergarten,children,${item}`} 
                    alt="Фото детского сада" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="text-nezabudka border-nezabudka hover:bg-nezabudka/10">
                Смотреть все фото
              </Button>
            </div>
          </div>
        </section>
        
        {/* Запись */}
        <section className="py-16 bg-nezabudka relative overflow-hidden">
          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-10">
            <Butterfly size="lg" color="#fff" className="w-40 h-40" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Запишитесь на экскурсию</h2>
              <p className="text-lg mb-8 text-white/80">
                Приходите в гости! Мы с радостью покажем вам наш садик и ответим на все вопросы
              </p>
              <Button className="bg-white text-nezabudka hover:bg-nezabudka-light hover:text-nezabudka-dark">
                Оставить заявку
              </Button>
            </div>
          </div>
        </section>
        
        {/* Отзывы */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-nezabudka-dark mb-12">
              Отзывы <span className="text-nezabudka">родителей</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Елена",
                  text: "Мой ребенок ходит в Незабудку уже 2 года. Очень довольны воспитателями и атмосферой. Сын всегда с радостью идет в садик!"
                },
                {
                  name: "Александр",
                  text: "Отличный садик с творческим подходом. Дочь научилась многому, особенно впечатляют занятия по рисованию и музыке!"
                },
                {
                  name: "Мария",
                  text: "Спасибо коллективу садика за внимательное отношение к детям. Питание разнообразное, много интересных занятий."
                }
              ].map((review, index) => (
                <Card key={index} className="border-nezabudka-light">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">"{review.text}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-nezabudka-light flex items-center justify-center text-nezabudka-dark font-semibold">
                        {review.name[0]}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-nezabudka-dark">{review.name}</p>
                        <p className="text-sm text-muted-foreground">Родитель</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
