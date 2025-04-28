
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Butterfly from "./Butterfly";

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nezabudka-dark mb-4">
            Почему выбирают "Незабудку"
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы создаем развивающую среду, где каждый ребенок найдет занятие по душе и раскроет свой потенциал
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="relative overflow-hidden border-2 border-nezabudka-light">
            <div className="absolute -right-4 -top-4 rotate-12 opacity-20">
              <Butterfly size="lg" color="#6E59A5" />
            </div>
            <CardHeader>
              <CardTitle className="text-nezabudka-dark">Безопасность</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Современная система безопасности, видеонаблюдение и контроль доступа для спокойствия родителей
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-2 border-nezabudka-light">
            <div className="absolute -right-4 -top-4 rotate-12 opacity-20">
              <Butterfly size="lg" color="#6E59A5" />
            </div>
            <CardHeader>
              <CardTitle className="text-nezabudka-dark">Профессиональные педагоги</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Команда опытных воспитателей с педагогическим образованием и любовью к детям
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-2 border-nezabudka-light">
            <div className="absolute -right-4 -top-4 rotate-12 opacity-20">
              <Butterfly size="lg" color="#6E59A5" />
            </div>
            <CardHeader>
              <CardTitle className="text-nezabudka-dark">Разнообразные занятия</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Творчество, музыка, спорт, изучение языков и другие развивающие занятия для всестороннего развития
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-nezabudka-light rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute right-8 bottom-8">
            <Butterfly size="lg" />
          </div>
          <div className="absolute left-12 top-12">
            <Butterfly size="md" className="opacity-60" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-nezabudka-dark mb-4">Наша галерея</h3>
              <p className="text-gray-700 mb-6">
                Посмотрите, как проходят занятия и мероприятия в нашем детском саду
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video rounded-md bg-nezabudka-bg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605627079912-97c3810a11a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Дети играют" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video rounded-md bg-nezabudka-bg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Творческое занятие" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video rounded-md bg-nezabudka-bg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Музыкальное занятие" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video rounded-md bg-nezabudka-bg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Игры на улице" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-nezabudka-dark mb-4">Отзывы родителей</h3>
              <div className="space-y-6">
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-4">
                      "Моя дочка с радостью бежит в садик каждое утро! Прекрасные воспитатели и интересные занятия сделали «Незабудку» её вторым домом."
                    </p>
                    <p className="font-medium text-nezabudka-dark">Анна, мама Софии</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-4">
                      "Очень довольны выбором садика. Ребенок за полгода научился многому: говорит по-английски, рисует, поет. Рекомендую!"
                    </p>
                    <p className="font-medium text-nezabudka-dark">Дмитрий, отец Артема</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
