import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features: React.FC = () => {
  const features = [
    {
      icon: "🏆",
      title: "Опытные воспитатели",
      description: "Наши педагоги имеют высшее образование и многолетний опыт работы с детьми"
    },
    {
      icon: "🍎",
      title: "Сбалансированное питание",
      description: "Разнообразное меню с учетом всех потребностей растущего организма"
    },
    {
      icon: "🎨",
      title: "Творческое развитие",
      description: "Множество кружков и студий для всестороннего развития талантов"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-nezabudka-dark mb-12">
          Почему родители выбирают <span className="text-nezabudka">нас</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-nezabudka-light hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-nezabudka-dark">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
