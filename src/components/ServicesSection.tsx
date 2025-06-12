import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Zap",
      title: "Энергоэффективность",
      description:
        "Аудит энергопотребления, внедрение LED-освещения, оптимизация систем отопления и кондиционирования",
      benefits: [
        "До 40% экономии на электроэнергии",
        "Сертификация LEED",
        "Мониторинг потребления",
      ],
    },
    {
      icon: "Recycle",
      title: "Утилизация отходов",
      description:
        "Системы раздельного сбора, переработка материалов, программы Zero Waste",
      benefits: [
        "Снижение расходов на утилизацию",
        "Соответствие экостандартам",
        "Корпоративная репутация",
      ],
    },
    {
      icon: "TreePine",
      title: "Эко-материалы",
      description:
        "Подбор экологичных материалов для офиса, сертифицированная мебель, натуральные покрытия",
      benefits: [
        "Здоровая рабочая среда",
        "Долговечность материалов",
        "Устойчивое развитие",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Комплексный подход к экологической трансформации вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full w-fit group-hover:bg-green-200 transition-colors">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-green-600"
                  />
                </div>
                <CardTitle className="text-2xl text-slate-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 flex-shrink-0"
                      />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
