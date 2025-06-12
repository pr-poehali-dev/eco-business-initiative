import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "TrendingDown",
      title: "Снижение затрат",
      description:
        "Оптимизация расходов на энергию и утилизацию отходов до 35%",
    },
    {
      icon: "Award",
      title: "Повышение репутации",
      description:
        "Статус экологически ответственной компании привлекает клиентов",
    },
    {
      icon: "Users",
      title: "Мотивация сотрудников",
      description: "Здоровая рабочая среда повышает продуктивность на 15%",
    },
    {
      icon: "Shield",
      title: "Соответствие стандартам",
      description: "Полное соблюдение экологических требований и сертификации",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Преимущества сотрудничества
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Измеримые результаты для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 mx-auto p-6 bg-white rounded-full w-fit shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Icon
                  name={benefit.icon as any}
                  size={40}
                  className="text-green-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">12</div>
              <div className="text-slate-600">месяцев</div>
              <div className="text-sm text-slate-500">
                средний срок окупаемости
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-slate-600">клиентов</div>
              <div className="text-sm text-slate-500">рекомендуют нас</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-slate-600">поддержка</div>
              <div className="text-sm text-slate-500">после внедрения</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
